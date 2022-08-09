interface CordovaPlugins {
    firebase: FirebasePlugins;
}

interface FirebasePlugins {
    inappmessaging: typeof import("./FirebaseInappMessaging");
}
