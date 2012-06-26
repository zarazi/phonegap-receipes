function onCompassLoad() {
    var options = { frequency: 100 };
    navigator.compass.watchHeading(rotateNeedle, compassError, options);
}

function rotateNeedle(degree) {
    $("#needle").rotate(degree);
}

function compassError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}