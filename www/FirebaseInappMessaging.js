var PLUGIN_NAME = "FirebaseInappMessaging";
// @ts-ignore
var exec = require("cordova/exec");

exports.setAutomaticDataCollectionEnabled =
function(enabled) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "setAutomaticDataCollectionEnabled", [enabled]);
    });
};