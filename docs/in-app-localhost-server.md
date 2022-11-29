---
sidebar_position: 5
date: 2022-10-12 12:00:00
---

# In-App Localhost Server

The `InAppLocalhostServer` class allows you to create a simple server on `http://localhost:[port]/` in order to be able to load your assets file on a local server.

## Basic Usage

To start and stop the server, you can use the `InAppLocalhostServer.start` and `InAppLocalhostServer.stop` methods.

The default port value is `8080`.

Use `directoryIndex` to change the index file to use. The default value is `index.html`.

Use `documentRoot` to change the document root path to serve. The default value is `./`.

Example:
```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

final InAppLocalhostServer localhostServer = new InAppLocalhostServer(documentRoot: 'assets');

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (!kIsWeb) {
    // start the localhost server
    await localhostServer.start();
  }

  if (!kIsWeb && defaultTargetPlatform == TargetPlatform.android) {
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
                    url: WebUri("http://localhost:8080/index.html")),
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
