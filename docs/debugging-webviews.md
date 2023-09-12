---
sidebar_position: 2
date: 2022-10-12 12:00:00
---

# Debugging WebViews

## Debugging info

WebViews and some controllers have debugging info enabled by default when your flutter app is running in debug mode (based on the `kDebugMode` flutter constant value).

You can change the `DebugLoggingSettings` properties of the following static properties:
- `InAppWebView` and `HeadlessInAppWebView` through `WebView.debugLoggingSettings`;
- `ChromeSafariBrowser.debugLoggingSettings`;
- `InAppBrowser.debugLoggingSettings` for InAppBrowser specific events, otherwise `WebView.debugLoggingSettings`;
- `FindInteractionController.debugLoggingSettings`;
- `PullToRefreshController.debugLoggingSettings`;
- `WebAuthenticationSession.debugLoggingSettings`.

For example, to disable all WebView debugging info:
```dart
WebView.debugLoggingSettings.enabled = false;
```

Instead, to exclude debugging info of specific WebView events:
```dart
WebView.debugLoggingSettings.excludeFilter.add(
  RegExp(r"onScrollChanged")
);
```

`WebView.debugLoggingSettings` comes with a default list of excluded events
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
On Android, in order to enable/disable debugging WebViews using `chrome://inspect/#devices` on Chrome, you should use the `AndroidInAppWebViewController.setWebContentsDebuggingEnabled(bool debuggingEnabled)` static method.

For example, you could call it inside the `onWebViewCreated` callback:
```dart
InAppWebView(
  onWebViewCreated: (InAppWebViewController controller) async {
   if (!kIsWeb && kDebugMode && defaultTargetPlatform == TargetPlatform.android) {
     await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
   }
  }
),
```

## Inspect iOS and MacOS WebViews
On iOS < `16.4` and MacOS < `13.3`, debugging WebViews on Safari through developer tools is always enabled. There isn't a way to enable or disable it.

For iOS >= `16.4` and MacOS >= `13.3`, you need to set `InAppWebViewSettings.isInspectable` setting to `true` for each WebView you want to inspect on Safari through developer tools.
