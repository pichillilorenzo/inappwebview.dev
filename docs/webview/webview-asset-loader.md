---
sidebar_position: 10
date: 2022-21-10 17:00:00
---

# WebView Asset Loader

`WebViewAssetLoader` is an **Android-only** helper class used to load local files including application's static assets and resources using http(s):// URLs inside a WebView.
Loading local files using web-like URLs instead of `"file://"` is desirable as it is compatible with the Same-Origin policy.

For more context about application's assets and resources and how to normally access them please refer to
[Android Developer Docs: App resources overview](https://developer.android.com/guide/topics/resources/providing-resources).

Using http(s):// URLs to access local resources may conflict with a real website.
This means that local files should only be hosted on domains your organization owns
(at paths reserved for this purpose) or the default domain reserved for this: `appassets.androidplatform.net`.

## Basic Usage

A typical usage would be like:
```dart
InAppWebViewSettings settings = InAppWebViewSettings(
  webViewAssetLoader: WebViewAssetLoader(
    pathHandlers: [
      AssetsPathHandler(path: '/assets/')
    ]
  )
);
```

Use `domain` to set a custom domain, different from the default value `appassets.androidplatform.net` and
`httpAllowd` if you want to allow using the HTTP scheme in addition to HTTPS (the default is to not allow HTTP).

A `PathHandler` is a handler that produces responses for a registered path.

The path should start and end with a `"/"` and it shouldn't collide with a real web path.

`WebViewAssetLoader` will try Path Handlers in the order they're registered, and will use whichever is the first to return a non-null.

Native path handlers:
- `AssetsPathHandler`: handler class to open a file from assets directory in the application APK;
- `ResourcesPathHandler`: handler class to open a file from resources directory in the application APK;
- `InternalStoragePathHandler`: handler class to open files from application internal storage.

Your flutter asset files can be found under the folder `/assets/flutter_assets` of the application APK.

Extend the `PathHandler` abstract class to handle other use-cases according to your app's needs.
For example:
```dart
class CustomPathHandler extends PathHandler {
  CustomPathHandler({required String path}) : super(path: path);

  @override
  Future<WebResourceResponse?> handle(String path) async {
    try {
      final assetPath = path.replaceFirst("flutter_assets/", "");
      final data = await rootBundle.load(assetPath);
      return WebResourceResponse(
        data: data.buffer.asUint8List(),
      );
    } catch (e) {
      print(e);
    }
    return WebResourceResponse(data: null);
  }
}
// ...
InAppWebViewSettings settings = InAppWebViewSettings(
    webViewAssetLoader: WebViewAssetLoader(
        pathHandlers: [
          CustomPathHandler(path: '/assets/')
        ]
    )
);
```

Complete example with a custom domain:
```dart
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(kDebugMode);
  }

  runApp(const MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final GlobalKey webViewKey = GlobalKey();

  InAppWebViewSettings settings = InAppWebViewSettings(
      isInspectable: kDebugMode,

      // Setting this off for security. Off by default for SDK versions >= 16.
      allowFileAccessFromFileURLs: false,
      // Off by default, deprecated for SDK versions >= 30.
      allowUniversalAccessFromFileURLs: false,

      // Keeping these off is less critical but still a good idea, especially if your app is not
      // using file:// or content:// URLs.
      allowFileAccess: false,
      allowContentAccess: false,

      // Basic WebViewAssetLoader with custom domain
      webViewAssetLoader: WebViewAssetLoader(
          domain: "my.custom.domain.com",
          pathHandlers: [AssetsPathHandler(path: '/assets/')]));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('WebView Asset Loader'),
        ),
        body: Column(children: <Widget>[
          Expanded(
              child: InAppWebView(
            key: webViewKey,
            initialUrlRequest: URLRequest(
                url: WebUri(
                    "https://my.custom.domain.com/assets/flutter_assets/assets/website/index.html")),
            initialSettings: settings,
          )),
        ]));
  }
}
```

Where `assets/website/index.html` is a flutter asset file that contains this simple HTML code:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>WebViewAssetLoader</title>
</head>
<body>
    <h1>WebViewAssetLoader</h1>
    <p>This is a test.</p>
</body>
</html>
```
