---
sidebar_position: 2
date: 2021-03-08 10:48:00
---

# Debugging WebViews

## Android WebViews
On Android, in order to enable/disable debugging WebViews using `chrome://inspect/#devices` on Chrome, you should use the `AndroidInAppWebViewController.setWebContentsDebuggingEnabled(bool debuggingEnabled)` static method.

For example, you could call it inside the main function:
```dart
Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(new MyApp());
}
```

## iOS WebViews
On iOS, debugging WebViews on Safari through developer tools is always enabled. There isn't a way to enable or disable it.
