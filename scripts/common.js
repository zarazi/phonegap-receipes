// Global variable that will tell us if PhoneGap is ready
var isPhoneGapReady = false;

// Default all phone types to false
var isAndroid = false;
var isBlackberry = false;
var isIphone = false;
var isWindows = false;

// Store the device's uuid
var deviceUUID;

// Store the current network status
var isConnected = false;
var isHighSpeed;
var internetInterval;

var currentUrl;

function init(url) {
    if (typeof url != 'string') {
        currentUrl = location.href;
    } else {
        currentUrl = url;
    }

    if (isPhoneGapReady) {
        onDeviceReady();
    } else {
        // Add an event listener for deviceready
        document.addEventListener("deviceready", 
            onDeviceReady, false);
        
        // Older versions of Blackberry < 5.0 don't support 
        // PhoneGap's custom events, so instead we need to 
        // perform an interval check every 500 milliseconds 
        // to see if PhoneGap is ready.  Once done, the 
        // interval will be cleared and normal processing
        // can begin
        var intervalID = window.setInterval(function() {
              if (PhoneGap.available) {
                  onDeviceReady();
              }
          }, 500);
      }
}

function onDeviceReady() {
    window.clearInterval(intervalID);
    
    // set to true
    isPhoneGapReady = true;
    
    deviceUUID = device.uuid;
    
    // detect the device's platform
    deviceDetection();
    
    // detect for network access
    networkDetection();
    
    // execute any events at start up
    executeEvents();
    
    // execute a callback function
    executeCallback();
}

function executeEvents() {
    if (isPhoneGapReady) {
        // attach events for online and offline detection
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
        
        // attach events for pause and resume detection
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);
        
        // set a timer to check the network status
        internetInterval = window.setInterval(function() {
              if (navigator.network.connection.type != Connection.NONE) {
                onOnline();
              } else {
                onOffline();
              }
          }, 5000);
    }
}

function executeCallback() {
    if (isPhoneGapReady) {
        // get the name of the current html page
        var pages = currentUrl.split("/");
        var currentPage = pages[pages.length - 1].slice(0, pages[pages.length - 1].indexOf(".html"));
        
        // capitalize the first letter and execute the function
        currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
        
        if (typeof window['on' + currentPage + 'Load'] == 'function') {
            window['on' + currentPage + 'Load']();
        }
    }
}

function deviceDetection() {
    if (isPhoneGapReady) {
        switch (device.platform) {
            case "Android":
                isAndroid = true;
                break;
            case "Blackberry":
                isBlackberry = true;
                break;
            case "iPhone":
                isIphone = true;
                break;
            case "WinCE":
                isWindows = true;
                break;
        }
    }
}

function networkDetection() {
    if (isPhoneGapReady) {
        // as long as the connection type is not none, 
        // the device should have Internet access
        if (navigator.network.connection.type != Connection.NONE) {
            isConnected = true;
        }
        
        // determine if this connection is high speed or not
        switch (navigator.network.connection.type) {
            case Connection.UNKNOWN:
            case Connection.CELL_2G:
                isHighSpeed = false;
                break;
            default:
                isHighSpeed = true;
                break;
        }
    }
}

function onOnline() {
    isConnected = true;
}

function onOffline() {
    isConnected = false;
}

function onPause() {
    isPhoneGapReady = false;
    
    // clear the Internet check interval
    window.clearInterval(internetInterval);
}

function onResume() {
    // don't run if phonegap is already ready
    if (isPhoneGapReady == false) {
        alert('resuming');
        init(currentUrl);
    }
}

// This gets called by jQuery mobile when the page has loaded
$(document).bind("pageload", function(event, data) {
    init(data.url);
});

$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.addBackBtn = true;
});

// Set an onload handler to call the init function
window.onload = init;