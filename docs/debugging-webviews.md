---
sidebar_position: 2
date: 2022-10-12 12:00:00
---

# Debugging WebViews

## Debugging info

WebViews and some controllers have debugging info enabled by default when your flutter app is running in debug mode (based on the `kDebugMode` flutter constant value).

You can change the `DebugLoggingSettings` properties of the following static properties:
- `InAppWebView` and `HeadlessInAppWebView` through `PlatformInAppWebViewController.debugLoggingSettings`;
- `PlatformChromeSafariBrowser.debugLoggingSettings` for `ChromeSafariBrowser` specific events;
- `PlatformInAppBrowser.debugLoggingSettings` for `InAppBrowser` specific events, otherwise `PlatformInAppWebViewController.debugLoggingSettings`;
- `PlatformFindInteractionController.debugLoggingSettings`;
- `PlatformPullToRefreshController.debugLoggingSettings`;
- `PlatformWebAuthenticationSession.debugLoggingSettings`.

For example, to disable all WebView debugging info:
```dart
PlatformInAppWebViewController.debugLoggingSettings.enabled = false;
```

Instead, to exclude debugging info of specific WebView events:
```dart
PlatformInAppWebViewController.debugLoggingSettings.excludeFilter.add(
  RegExp(r"onScrollChanged")
);
```

`PlatformInAppWebViewController.debugLoggingSettings` comes with a default list of excluded events
and `maxLogMessageLength` value:
```dart
DebugLoggingSettings(
  maxLogMessageLength: 1000,
  excludeFilter: [
    RegExp(r"onScrollChanged"),
    RegExp(r"onOverScrolled"),
    RegExp(r"onReceivedIcon")
]);
```

## Inspect Android WebViews
On Android, in order to enable/disable debugging WebViews using `chrome://inspect/#devices` on Chrome, you should use the `InAppWebViewController.setWebContentsDebuggingEnabled(bool debuggingEnabled)` static method.

For example, you could call it inside the main function:
```dart
Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(new MyApp());
}
```

## Inspect iOS and MacOS WebViews
On iOS < `16.4` and MacOS < `13.3`, debugging WebViews on Safari through developer tools is always enabled. There isn't a way to enable or disable it.

For iOS >= `16.4` and MacOS >= `13.3`, you need to set `InAppWebViewSettings.isInspectable` setting to `true` for each WebView you want to inspect on Safari through developer tools.
