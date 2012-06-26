function onPluginLoad() {
    window.plugins.xmlParser.parse(parseSuccess, parseFail, "http://feeds.feedburner.com/Webistrate");
}

function parseSuccess(result) {
    for (var i = 0; i < result.length; i++) {
        $("#xmlList").append("<li><a href=\"" + result[i].link + "\">" + result[i].title + "</a></li>");
    }
    
    $("#xmlList").listview('refresh');
}

function parseFail(error) {
    alert('fail = ' + error);
}