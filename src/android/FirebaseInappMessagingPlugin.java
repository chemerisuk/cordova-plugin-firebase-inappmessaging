package by.chemerisuk.cordova.firebase;

import com.google.firebase.inappmessaging.FirebaseInAppMessaging;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.json.JSONException;

import by.chemerisuk.cordova.support.CordovaMethod;
import by.chemerisuk.cordova.support.ReflectiveCordovaPlugin;

public class FirebaseInappMessagingPlugin extends ReflectiveCordovaPlugin {
    @CordovaMethod
    private void setAutomaticDataCollectionEnabled(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        boolean collectionEnabled = args.getBoolean(0);
        FirebaseInAppMessaging.getInstance().setAutomaticDataCollectionEnabled(collectionEnabled);
        callbackContext.success();
    }
}
