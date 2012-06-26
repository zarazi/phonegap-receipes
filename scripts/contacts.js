function onContactsLoad() {
    var fields = ["id", "displayName", "name"];
    navigator.contacts.find(fields, showContacts);
}

function onViewLoad() {
    getContactById(getParameterByName("id"), showContact);
}

function onFormLoad() {
    var id = getParameterByName("id");

    // if there is an id, load the contact
    if (id.length > 0) {
        getContactById(id, populateForm);
    }
}

function getContactById(id, callback) {
    // get the contact by the displayName from the URL
    var fields = ["id", "displayName", "name", "emails", "phoneNumbers"];
    var options = new ContactFindOptions();
    options.filter = id;
    navigator.contacts.find(fields, callback, onError, options);
}

function showContact(contacts) {
    if (contacts.length > 0) {
        var contact = contacts[0];

        // update the link to include the id
        $("a[href='form.html']").attr("href", function(i, href) {
            return href + "?id=" + contact.id;
        });
        
        $("#contact").append("<h2>" + contact.name.givenName + " " + contact.name.familyName + "</h2>");
        if (contact.emails.length > 0) {
            $("#contact").append("<h3>Emails</h3>");
            $("#contact").append("<ul>");
        }
        for (var i = 0; i < contact.emails.length; i++) {
            $("#contact").append("<li>" + contact.emails[i].value + "</li>");
        }
        if (contact.emails.length > 0) {
            $("#contact").append("</ul>");
        }
        if (contact.phoneNumbers.length > 0) {
            $("#contact").append("<h3>Phone Numbers</h3>");
            $("#contact").append("<ul>");
        }
        for (var i = 0; i < contact.phoneNumbers.length; i++) {
            $("#contact").append("<li>" + contact.phoneNumbers[i].value + "</li>");
        }
        if (contact.phoneNumbers.length > 0) {
            $("#contact").append("</ul>");
        }
    } else {
        alert("Unable to find contact");
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(currentUrl);
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showContacts(contacts) {
    var cSort = function(a, b) {
        var aName = a.name.givenName;
        var bName = b.name.givenName;
        return aName < bName ? -1 : (aName == bName ? 0 : 1);
    };
    contacts = contacts.sort(cSort);

    var dividers = "";
    for (var i = 0; i < contacts.length; i++) {
        var firstLetter = contacts[i].name.givenName.charAt(0).toUpperCase();
        // check if we need to add a divider
        if (dividers.indexOf(firstLetter) < 0) {
            dividers += firstLetter;
            $("#contactList").append("<li data-role=\"list-divider\">" + firstLetter + "</li>");
        }
        $("#contactList").append("<li><a href=\"view.html?id=" + contacts[i].id + "\">" + contacts[i].name.givenName + " " + contacts[i].name.familyName + "</a></li>");
    }
    
    $("#contactList").listview('refresh');
}

function populateForm(contacts) {
    if (contacts.length > 0) {
        var contact = contacts[0];
        var form = document.getElementsByTagName('form')[0].elements;
        
        form.id.value = contact.id;
        form.displayName.value = contact.displayName;
        form.firstName.value = contact.name.givenName;
        form.lastName.value = contact.name.familyName;
        if (contact.emails.length > 0) {
            form.email_home.value = contact.emails[0].value;
            if (contact.emails.length > 1) {
                form.email_work.value = contact.emails[1].value;
                if (contact.emails.length > 2) {
                    form.email_other.value = contact.emails[2].value;
                }
            }
        }
        if (contact.phoneNumbers.length > 0) {
            form.phone_home.value = contact.phoneNumbers[0].value;
            if (contact.phoneNumbers.length > 1) {
                form.phone_work.value = contact.phoneNumbers[1].value;
                if (contact.phoneNumbers.length > 2) {
                    form.phone_other.value = contact.phoneNumbers[2].value;
                }
            }
        }
    }
}

function saveContact(contacts) {
    var form = document.getElementsByTagName('form')[0].elements;
    var contact;
    
    if (form.id.value != 0 && typeof contacts == "undefined") {
        getContactById(form.id.value, saveContact);
    } else if (typeof contacts != "undefined") {
        contact = contacts[0];
    } else {
        contact = navigator.contacts.create();
    }
    
    contact.displayName = form.displayName.value;
    contact.nickname = form.displayName.value;
    
    var name = new ContactName();
    name.givenName = form.firstName.value;
    name.familyName = form.lastName.value;
    contact.name = name;
    
    var emails = new Array();
    if (form.email_home.value.length > 0) {
        emails[emails.length] = new ContactField('home', form.email_home.value);
    }
    if (form.email_work.value.length > 0) {
        emails[emails.length] = new ContactField('work', form.email_work.value);
    }
    if (form.email_other.value.length > 0) {
        emails[emails.length] = new ContactField('other', form.email_other.value);
    }
    contact.emails = emails;
    
    var phoneNumbers = new Array();
    if (form.phone_home.value.length > 0) {
        phoneNumbers[phoneNumbers.length] = new ContactField('home', form.phone_home.value);
    }
    if (form.phone_work.value.length > 0) {
        phoneNumbers[phoneNumbers.length] = new ContactField('work', form.phone_work.value);
    }
    if (form.phone_other.value.length > 0) {
        phoneNumbers[phoneNumbers.length] = new ContactField('other', form.phone_other.value);
    }
    contact.phoneNumbers = phoneNumbers;
    
    contact.save(onSuccess,onError);
}

function onSuccess(contact) {
    alert("Save Success");
    $.mobile.changePage("contacts.html");
}

function onError(contactError) {
    alert("Error = " + contactError.code);
}