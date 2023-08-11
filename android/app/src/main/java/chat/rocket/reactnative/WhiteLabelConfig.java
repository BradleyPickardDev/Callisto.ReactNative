package chat.rocket.reactnative;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class WhiteLabelConfig extends ReactContextBaseJavaModule {

    @Nonnull
    private final String appName;
    private final String clientName;
    private final String serverPlaceHolder;

    public WhiteLabelConfig(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.str_jovian_app);

        this.clientName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.client_name);

        this.serverPlaceHolder = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.str_server_url_placeholder);
    }

    @NonNull
    @Override
    public String getName() {
        return "WhiteLabelConfig";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getAppName() {
        return appName;
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getGreetingText() {
        return "Welcome";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getLogoPath() {
        return "logo";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getServerPlaceHolder() {
        return serverPlaceHolder;
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getClientName() {
        return clientName;
    }
}
