#import "FirebaseInAppMessagingDisplayPlugin.h"

@import Firebase;


@implementation FirebaseInAppMessagingDisplayPlugin

- (void)pluginInitialize {
    NSLog(@"Starting Firebase InAppMessagingDisplay plugin");

    if(![FIRApp defaultApp]) {
        [FIRApp configure];
    }
}

@end