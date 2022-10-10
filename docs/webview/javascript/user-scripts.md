---
title: "Javascript User Scripts"
sidebar_position: 3
date: 2021-04-07 13:00:00
---

# User Scripts

What is a User Script? We can say that the `UserScript` class is the equivalent of the [WKUserScript](https://developer.apple.com/documentation/webkit/wkuserscript) iOS native class. It represents a JavaScript code that the WebView injects into the web page and in any other subsequent navigated web page.

What are the advantages of using User Scripts instead of just injecting some JavaScript code with, for example, the `evaluateJavascript` method?
An `UserScript` gives you the possibility to inject a JavaScript code before other resources of the web page are loaded, setting the `injectionTime` property, for example, to `UserScriptInjectionTime.AT_DOCUMENT_START` (that is the equivalent of the `WKUserScriptInjectionTime.atDocumentStart` iOS native property).
Also, for each `UserScript` you can set an optional [Content World](/docs/webview/javascript/content-worlds/), and, only on iOS, you can set whether to inject the script into the main frame using the `iosForMainFrameOnly` property.

:::caution Not for Android
  Unfortunately, on Android, when using `UserScriptInjectionTime.AT_DOCUMENT_START`, there is no guarantee that the JavaScript code has been injected before other resources are loaded because the corresponding native class/feature doesn't exist, so InAppWebView tries to inject that `UserScript` as soon as possible.
:::

To add a `UserScript` to a WebView, you can use the `WebView.initialUserScripts` property:
```dart
InAppWebView(
  initialUrlRequest: URLRequest(url: Uri.parse('https://flutter.dev')),
  initialUserScripts: UnmodifiableListView<UserScript>([
    UserScript(
        source: "var foo = 49;",
        injectionTime: UserScriptInjectionTime.AT_DOCUMENT_START),
    UserScript(
        source: "var bar = 2;",
        injectionTime: UserScriptInjectionTime.AT_DOCUMENT_END),
  ]),
  onLoadStop: (controller, url) async {
    var result = await controller.evaluateJavascript(source: "foo + bar");
    print(result); // 51
  },
),
```

To add or remove User Scripts, you can also use the corresponding methods, such as `InAppWebViewController.addUserScript`, `InAppWebViewController.removeUserScript`, etc.

:::info
  Adding or removing User Scripts at runtime after a web page is loaded will take no effect until the next web page load.
:::

For each `UserScript` you can define a `groupName` that you can use, for example, to remove a group of User Scripts with the `InAppWebViewController.removeUserScriptsByGroupName` method.
