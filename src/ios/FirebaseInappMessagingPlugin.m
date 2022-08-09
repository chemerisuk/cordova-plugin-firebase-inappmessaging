#import "FirebaseInappMessagingPlugin.h"

@import FirebaseInAppMessaging;

@implementation FirebaseInappMessagingPlugin

- (void)setAutomaticDataCollectionEnabled:(CDVInvokedUrlCommand *)command {
    bool collectionEnabled = [[command.arguments objectAtIndex:0] boolValue];

    [FIRInAppMessaging inAppMessaging].automaticDataCollectionEnabled = collectionEnabled;

    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
