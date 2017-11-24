package com.artemis_react;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Author: JackHou
 * Date: 2017/11/24.
 */

public class AndroidToastModule extends ReactContextBaseJavaModule {
    private Context mContext;
    public AndroidToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "AndroidToastModule";
    }

    @ReactMethod
    public void showToast(String msg){
        Toast.makeText(mContext, msg, Toast.LENGTH_LONG).show();
    }
}
