# Cordova plugin for [Firebase In-App Messaging](https://firebase.google.com/docs/in-app-messaging)

[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![NPM total downloads][npm-total-downloads]][npm-url] [![PayPal donate](https://img.shields.io/badge/paypal-donate-ff69b4?logo=paypal)][donate-url] [![Twitter][twitter-follow]][twitter-url]

| [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)][donate-url] | Your help is appreciated. Create a PR, submit a bug or just grab me :beer: |
|-|-|

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-inappmessaging
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-inappmessaging.svg
[npm-downloads]: https://img.shields.io/npm/dm/cordova-plugin-firebase-inappmessaging.svg
[npm-total-downloads]: https://img.shields.io/npm/dt/cordova-plugin-firebase-inappmessaging.svg?label=total+downloads
[twitter-url]: https://twitter.com/chemerisuk
[twitter-follow]: https://img.shields.io/twitter/follow/chemerisuk.svg?style=social&label=Follow%20me
[donate-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K7CE5R3PAPT9A&source=url

## Index

<!-- MarkdownTOC levels="2,3" autolink="true" -->

- [Supported Platforms](#supported-platforms)
- [Installation](#installation)
    - [Disabling automatic data collection](#disabling-automatic-data-collection)
    - [Adding required configuration files](#adding-required-configuration-files)
- [Functions](#functions)
    - [setAutomaticDataCollectionEnabled](#setautomaticdatacollectionenabled)
    - [setMessagesSuppressed](#setmessagessuppressed)

<!-- /MarkdownTOC -->

## Supported Platforms

- iOS
- Android

## Installation

    cordova plugin add cordova-plugin-firebase-inappmessaging

Use variables `IOS_FIREBASE_POD_VERSION` and `ANDROID_FIREBASE_BOM_VERSION` to override dependency versions for Firebase SDKs:

    $ cordova plugin add cordova-plugin-firebase-inappmessaging \
        --variable IOS_FIREBASE_POD_VERSION="9.3.0" \
        --variable ANDROID_FIREBASE_BOM_VERSION="30.3.1"

### Disabling automatic data collection
By default, Firebase In-App Messaging automatically delivers messages to all app users you target in messaging campaigns. To deliver those messages, the Firebase In-App Messaging SDK uses Firebase installation IDs to identify each user's app. This means that In-App Messaging has to send client data, linked to the installation ID, to Firebase servers. If you'd like to give users more control over the data they send, disable automatic data collection and give them a chance to approve data sharing.

Set variable `AUTOMATIC_DATA_COLLECTION_ENABLED` to `false` to prevent collecting any user data:

    $ cordova plugin add cordova-plugin-firebase-inappmessaging \
        --variable AUTOMATIC_DATA_COLLECTION_ENABLED=false

Later you can re-enable automatic data collection (for instance after getting end-user consent) using method [setAutomaticDataCollectionEnabled](#setautomaticdatacollectionenabled). Once you set a data collection preference manually, the value persists through app restarts, overriding the value in your `AndroidManifest.xml`. If you'd like to disable initialization again, for example if a user opts out of collection later, pass `false` to the `setAutomaticDataCollectionEnabled` method.

### Adding required configuration files

Cordova supports `resource-file` tag for easy copying resources files. Firebase SDK requires `google-services.json` on Android and `GoogleService-Info.plist` on iOS platforms.

1. Put `google-services.json` and/or `GoogleService-Info.plist` into the root directory of your Cordova project
2. Add new tag for Android platform

```xml
<platform name="android">
    ...
    <resource-file src="google-services.json" target="app/google-services.json" />
</platform>
...
<platform name="ios">
    ...
    <resource-file src="GoogleService-Info.plist" />
</platform>
```

This way config files will be copied on `cordova prepare` step.

<!-- TypedocGenerated -->

## Functions

### setAutomaticDataCollectionEnabled

**setAutomaticDataCollectionEnabled**(`collectionEnabled`): `Promise`<`void`\>

Enables, disables, or clears automatic data collection for Firebase In-App Messaging

**`Example`**

```ts
cordova.plugins.firebase.inappmessaging.setAutomaticDataCollectionEnabled(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionEnabled` | `boolean` | Whether automatic collection is enabled |

#### Returns

`Promise`<`void`\>

Callback when operation is completed

___

### setMessagesSuppressed

**setMessagesSuppressed**(`messagesSupressed`): `Promise`<`void`\>

Enables or disables suppression of Firebase In App Messaging messages.

**`Example`**

```ts
cordova.plugins.firebase.inappmessaging.setMessagesSuppressed(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messagesSupressed` | `boolean` | Whether messages are suppressed |

#### Returns

`Promise`<`void`\>

Callback when operation is completed
