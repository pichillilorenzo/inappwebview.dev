---
sidebar_position: 10
date: 2021-03-08 10:48:00
---

# Service Worker

Check https://caniuse.com/serviceworkers for JavaScript Service Worker API availability.

## Service Worker on Android

On Android, the `AndroidServiceWorkerController` and `AndroidServiceWorkerClient` classes can be used to intercept requests.
Before using these classes or their methods, you should check if the service worker features you want to use are supported or not, for example:
```dart
Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);

    var swAvailable = await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.SERVICE_WORKER_BASIC_USAGE);
    var swInterceptAvailable = await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.SERVICE_WORKER_SHOULD_INTERCEPT_REQUEST);

    if (swAvailable && swInterceptAvailable) {
      AndroidServiceWorkerController serviceWorkerController = AndroidServiceWorkerController.instance();

      serviceWorkerController.serviceWorkerClient = AndroidServiceWorkerClient(
        shouldInterceptRequest: (request) async {
          print(request);
          return null;
        },
      );
    }
  }

  runApp(MyApp());
}
```

## Service Worker on iOS

:::info
The JavaScript Service Worker API is available starting from iOS 14.0+.
:::

To enable this JavaScript API on iOS there are only 2 ways:
- using "App-Bound Domains"
- your App proposes itself as a possible "Default Browser" such as iOS Safari or Google Chrome

### iOS App-Bound Domains

Read the [WebKit - App-Bound Domains](https://webkit.org/blog/10882/app-bound-domains/) article for details.

You can specify up to 10 "app-bound" domains using the new Info.plist key `WKAppBoundDomains`, for example:
```xml
<dict>
<key>WKAppBoundDomains</key>
<array>
    <string>flutter.dev</string>
    <string>github.com</string>
</array>
</dict>
```

After that, you need to set to `true` the `limitsNavigationsToAppBoundDomains` iOS-specific WebView option, for example:
```dart
InAppWebViewGroupOptions(
  ios: IOSInAppWebViewOptions(
    limitsNavigationsToAppBoundDomains: true // adds Service Worker API on iOS 14.0+
  )
)
```

### iOS Default Browser

Read the [Preparing Your App to be the Default Browser or Email Client](https://developer.apple.com/documentation/xcode/allowing_apps_and_websites_to_link_to_your_content/preparing_your_app_to_be_the_default_browser_or_email_client) article for details.
