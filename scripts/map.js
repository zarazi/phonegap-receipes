function onMapLoad() {
    if (isConnected) {
        alert('load api');
        // load the google api
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", "http://maps.googleapis.com/maps/api/js?sensor=true&callback=getGeolocation");
        document.getElementsByTagName("head")[0].appendChild(fileref);
    } else {
        alert("Must be connected to the Internet");
    }
}

function getGeolocation() {
alert('get location');
    // get the user's gps coordinates and display map
    var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(loadMap, geoError, options);
}

function loadMap(position) {
    alert('here');
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapObj = document.getElementById("map_canvas");
    var map = new google.maps.Map(mapObj, myOptions);
    
    var marker = new google.maps.Marker({
        position: latlng, 
        map: map, 
        title:"You"
    });
}

function geoError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}