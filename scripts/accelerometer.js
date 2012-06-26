var canvas;
var context;
var ball;

var prevX = 150;
var prevY = 150;
var direction = '+';
var offSet = 0.05; 

var accelTimer;

function onAccelerometerLoad() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    ball = document.getElementById('ball');
    ball.onload = function() {
        // was the ball image has loaded, start the watch
        var options = { frequency: 100 };
        accelTimer = navigator.accelerometer.watchAcceleration(moveBall, stopBall, options);
    };
    ball.src = "images/ball.png";
}

function moveBall(acceleration) {
    var x = acceleration.x * 100;
    var y = acceleration.y * 100;
    
    var accelX = x * offSet + (1 - offSet) * prevX;
    var accelY = y * offSet + (1 - offSet) * prevY;
    
    // detect the boundaries and reverse direction
    if (accelX >= 270) {
        accelX = 270;
        direction = '-';
    }
    if (accelY >= 300) {
        accelY = 300;
        direction = '-';
    }
    
    if (accelX <= -100) {
        accelX = -100;
        direction = '+';
    }
    if (accelY <= -10) {
        accelY = -10;
        direction = '+';
    }
    
    prevX = accelX;
    prevY = accelY;
    
    // draw the ball
    drawImage(accelX, accelY);
}

function stopBall(error) {
    // clear the watch
    navigator.accelerometer.clearWatch(accelTimer);
    
    alert("Error detecting acceleration");
}

function drawImage(x, y) {
    context.clearRect(0, 0, 350, 350);
    context.drawImage(ball, 0, 0, 100, 81, x, y, 100, 81);
}