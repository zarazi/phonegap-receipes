function onNotifyLoad() {
    alert("test 1");
    alert("test 2", handleClick);
    alert("test 3", handleClick, "My title");
    alert("test 4", handleClick, "My title", "All done");
    
    confirm("test 1");
    confirm("test 2", handleConfirmClick);
    confirm("test 3", handleConfirmClick, "My title");
    confirm("test 4", handleConfirmClick, "My title", "Play Again,Quit");
    
    navigator.notification.vibrate(500);
    navigator.notification.beep(3);
}

function handleClick() {
    
}

// button contains the name of the button clicked
// Windows Phone 7 Ignores button names, always 'OK|Cancel'
function handleConfirmClick(button) {
    if (button == 'Play Again' || button == 'OK') {
        // do play again
    } else if (button == 'Quit' || button == 'Cancel') {
        // do quit code
    }
}

// override the built in JavaScript alert function
function alert(msg, callback, title, button) {
    if (typeof callback == 'undefined') callback = handleClick;
    if (typeof title == 'undefined') title = "my title";
    if (typeof button == 'undefined') button = "click me";
    
    navigator.notification.alert(msg, callback, title, button); 
}

function confirm(msg, callback, title, buttons) {
    navigator.notification.confirm(msg, callback, title, buttons);
}