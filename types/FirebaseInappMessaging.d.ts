/**
 * Enables, disables, or clears automatic data collection for Firebase In-App Messaging
 * @param {boolean} collectionEnabled Whether automatic collection is enabled
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.inappmessaging.setAutomaticDataCollectionEnabled(true);
 */
export function setAutomaticDataCollectionEnabled(collectionEnabled: boolean): Promise<void>;
