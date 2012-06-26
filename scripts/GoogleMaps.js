var GoogleMaps = function() {};

GoogleMaps.prototype.map = function(successCallback, failureCallback) {
    return PhoneGap.exec(successCallback, failureCallback, 'GoogleMapsPlugin', '', []);
};

PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("googleMaps", new GoogleMaps());
});