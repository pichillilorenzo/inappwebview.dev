---
sidebar_position: 5
date: 2021-03-08 10:48:00
---

# In-App Localhost Server

The `InAppLocalhostServer` class allows you to create a simple server on `http://localhost:[port]/` in order to be able to load your assets file on a server. The default port value is `8080`.

## Basic Usage

To start and stop the server, you can use the `InAppLocalhostServer.start` and `InAppLocalhostServer.stop` methods.

Example:
```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

final InAppLocalhostServer localhostServer = new InAppLocalhostServer();

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // start the localhost server
  await localhostServer.start();

  if (defaultTargetPlatform == TargetPlatform.android) {
    await InAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('InAppLocalhostServer Example'),
      ),
      body: Container(
          child: Column(children: <Widget>[
            Expanded(
              child: InAppWebView(
                initialUrlRequest: URLRequest(
                    url: Uri.parse("http://localhost:8080/assets/index.html")),
                onWebViewCreated: (controller) {},
                onLoadStart: (controller, url) {},
                onLoadStop: (controller, url) {},
              ),
            )
          ])),
    );
  }
}
```
