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
    - [Adding required configuration files](#adding-required-configuration-files)

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
