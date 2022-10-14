---
title: "Javascript Content Worlds"
sidebar_position: 4
date: 2021-04-07 13:00:00
---

# Content Worlds

Starting from iOS 14.0+, WebKit introduces the concept of [WKContentWorld](https://developer.apple.com/documentation/webkit/wkcontentworld), which is an object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.

This concept has been introduced also into this plugin with the `ContentWorld` class.

Content worlds help prevent issues that occur when two scripts modify environment variables in conflicting ways.

You might use this support in the following scenarios:
- You have complex script logic to bridge your web content to your app, but your web content has complex script libraries of its own. In that scenario, use one content world for your app-specific scripts and a separate content world for your content-specific scripts.
- You implement a web browser that supports JavaScript extensions. In that scenario, create a unique content world for each extension to prevent conflicts between the extensions.

A `ContentWorld` object is a namespace and doesn't persist data outside of the current WebView or web page. If you use the same content world in two WebView objects, variables in one WebView's content world don't appear in the other WebView. Similarly, when the user or your app navigates to a new web page, variables from the previous page are gone, even if both pages share the same content world.

`ContentWorld` provides a default content world for your app (`ContentWorld.DEFAULT_CLIENT`) and a content world for the current web page (`ContentWorld.PAGE`). You can also create new content worlds using `ContentWorld.world(name: "myCustomWorld")`. For example, you might create a custom content world for each JavaScript extension you manage. Specify the content world object when configuring or executing scripts associated with your content.

:::info
  The content world doesn't apply to the current document or DOM of a webpage. Changes you make to the DOM are visible to all script code, regardless of content world. The content world affects only references to other JavaScript variables.
:::

## Limitations of Content Worlds on Android

Unfortunately, on Android, this concept doesn't exist natively. So, it has been implemented with the usage of `<iframe>` HTML elements.

You may ask why this hasn't been implemented using something like the [LiquidCore](https://github.com/LiquidPlayer/LiquidCore) library or something similar to the [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) iOS framework to implement it.

The problem with using these libraries/framework is that you can't access the `window` or `document` JavaScript objects of the current web page, of course.

Instead, with `ContentWorld`, you can access these objects and, so, you can interact with the web page itself.

Using `iframe`s on Android gives you the ability to create a new JavaScript context without conflicting with the main JavaScript context of the webpage (you can have, for example, 2 variables with the same name, because they exist in 2 different contexts/content worlds) and implement this sort of Content World such as on iOS. So, this plugin will create and append an `<iframe>` tag with the `id` attribute equals to `flutter_inappwebview_[Content World Name HERE]` to the web page's content that contains only the inline scripts in order to define a new scope of execution for JavaScript code.

Obviously, this comes with some limitations/disadvantages:
- for any `ContentWorld`, except `ContentWorld.PAGE` (that is the web page itself), if you need to access the `window` or `document` global Object, you need to use `window.top` and `window.top.document` respectively because the code runs inside an iframe;
- the execution of the inline `script`s could be blocked by the `Content-Security-Policy` header.

Here is a simple usage example:
```dart
InAppWebView(
  initialUrlRequest: URLRequest(
    url: Uri.parse("https://flutter.dev"),
  ),
  onLoadStop: (controller, url) async {
    await controller.evaluateJavascript(source: "var foo = 49;");
    await controller.evaluateJavascript(source: "var bar = 19;",
        contentWorld: ContentWorld.PAGE);
    print(await controller.evaluateJavascript(source: "foo + bar;")); // 68

    print(await controller.evaluateJavascript(source: "bar;",
        contentWorld: ContentWorld.DEFAULT_CLIENT)); // null
    // Because the variable "bar" has not been defined in the DEFAULT_CLIENT Content World,
    // on Android, you will have this console message error: {message: ReferenceError: bar is not defined, messageLevel: 3},
    // instead, on iOS: {message: ReferenceError: Can't find variable: bar, messageLevel: 3}
    await controller.evaluateJavascript(source: "var bar = 2;",
        contentWorld: ContentWorld.DEFAULT_CLIENT);
    print(await controller.evaluateJavascript(source: "bar;",
        contentWorld: ContentWorld.DEFAULT_CLIENT)); // 2

    // Change the HTML content of the current web page from a custom Content World
    var source = "${(Platform.isAndroid) ? "window.top.document.body.innerHTML" : "document.body.innerHTML"} = 'Modifying the body HTML content from another Content World';";
    await controller.evaluateJavascript(
        source: source,
        contentWorld: ContentWorld.world(name: "myCustomWorld"));
  },
  onConsoleMessage: (controller, consoleMessage) {
    print(consoleMessage); // print the console message
  },
),
```
