var PLUGIN_NAME = "FirebaseInappMessaging";
// @ts-ignore
var exec = require("cordova/exec");

exports.setAutomaticDataCollectionEnabled =
/**
 * Enables, disables, or clears automatic data collection for Firebase In-App Messaging
 * @param {boolean} collectionEnabled Whether automatic collection is enabled
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.inappmessaging.setAutomaticDataCollectionEnabled(true);
 */
function(collectionEnabled) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "setAutomaticDataCollectionEnabled", [collectionEnabled]);
    });
};

exports.setMessagesSuppressed =
/**
 * Enables or disables suppression of Firebase In App Messaging messages.
 * @param {boolean} messagesSupressed Whether messages are suppressed
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.inappmessaging.setMessagesSuppressed(true);
 */
function(messagesSupressed) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, "setMessagesSuppressed", [messagesSupressed]);
    });
};