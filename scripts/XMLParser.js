var XMLParser = function() {};

XMLParser.prototype.parse = function(successCallback, failureCallback, feedUrl) {
    return PhoneGap.exec(successCallback, failureCallback, 'XMLParserPlugin', '', [feedUrl]);
};

PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("xmlParser", new XMLParser());
});