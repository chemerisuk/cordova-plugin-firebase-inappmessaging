/**
 * Enables, disables, or clears automatic data collection for Firebase In-App Messaging
 * @param {boolean} collectionEnabled Whether automatic collection is enabled
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.inappmessaging.setAutomaticDataCollectionEnabled(true);
 */
export function setAutomaticDataCollectionEnabled(collectionEnabled: boolean): Promise<void>;
/**
 * Enables or disables suppression of Firebase In App Messaging messages.
 * @param {boolean} messagesSupressed Whether messages are suppressed
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.inappmessaging.setMessagesSuppressed(true);
 */
export function setMessagesSuppressed(messagesSupressed: boolean): Promise<void>;
