---
title: Proxy Controller
sidebar_position: 8
date: 2022-12-10 12:00:00
---

`ProxyController` represents the proxy settings that govern network requests made by `WebView`.
It's available only on Android.

## Basic Usage

WebView may make network requests in order to fetch content that is not otherwise read from the file system or provided directly by application code.
In this case by default the system-wide Android network proxy settings are used to redirect requests to appropriate proxy servers.

In the rare case that it is necessary for an application to explicitly specify its proxy configuration,
this API may be used to explicitly specify the proxy rules that govern WebView initiated network requests.

Before using it, check if `WebViewFeature.isFeatureSupported` returns `true` for `WebViewFeature.PROXY_OVERRIDE`.

Example:
```dart
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (defaultTargetPlatform == TargetPlatform.android) {
    var proxyAvailable = await WebViewFeature.isFeatureSupported(WebViewFeature.PROXY_OVERRIDE);

    if (proxyAvailable) {
      ProxyController proxyController = ProxyController.instance();

      await proxyController.clearProxyOverride();
      await proxyController.setProxyOverride(
          settings: ProxySettings(
              proxyRules: [
                ProxyRule(url: "https://myproxy.com")
              ],
              bypassRules: ["www.excluded.*"]
          ));
    }
  }

  runApp(MyApp());
}
```
