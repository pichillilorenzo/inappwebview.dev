---
title: "Javascript WebView Communication"
sidebar_position: 2
date: 2021-03-08 10:48:00
---

# Communication

You can communicate with JavaScript and vice-versa. There 3 ways to communicate with JavaScript:
- [JavaScript Handlers](#JavaScript-Handlers);
- [Web Message Channels](#Web-Message-Channels);
- [Web Message Listeners](#Web-Message-Listeners).

## JavaScript Handlers

To add a JavaScript handler, you can use `InAppWebViewController.addJavaScriptHandler` method, where you define the `handlerName` and a `callback` to be invoked when it is called by the JavaScript side. The `callback` can return data to be sent on the JavaScript side.
If you need to manage JavaScript handlers as soon as the web page is loaded, `InAppWebViewController.addJavaScriptHandler` should be called when the `InAppWebView` is created.

Here is an example of how to register a JavaScript handler:
```dart
onWebViewCreated: (controller) {
  // register a JavaScript handler with name "myHandlerName"
  controller.addJavaScriptHandler(handlerName: 'myHandlerName', callback: (args) {
    // print arguments coming from the JavaScript side!
    print(args);

    // return data to the JavaScript side!
    return {
      'bar': 'bar_value', 'baz': 'baz_value'
    };
  });
},
```

Instead, on the JavaScript side, to execute the callback handler and send data to Flutter, you need to use the `window.flutter_inappwebview.callHandler(handlerName, ...args)` method, where `handlerName` is a string that represents the handler name that you are calling and `args` are optional arguments that you can send to the Flutter side.

:::info
  *Note:* If you want a different name instead of `window.flutter_inappwebview`, you can simply wrap it inside another JavaScript function or object.

  For example: `window.myCustomObj = { callHandler: window.flutter_inappwebview.callHandler }` and, then, you can use `window.myCustomObj.callHandler` in the same way.

  Also, you can wrap a whole specific handler this way: `const myHandlerName = (...args) => window.flutter_inappwebview.callHandler('myHandlerName', ...args);` and, then, you can use `myHandlerName();` in the same way.
:::

In order to call `window.flutter_inappwebview.callHandler` properly inside a JavaScript file or a `<script>` HTML tag, you need to wait and listen to the `flutterInAppWebViewPlatformReady` JavaScript event. This event will be dispatched as soon as the platform is ready to handle the `callHandler` method. You can also use a global flag variable that is set when the `flutterInAppWebViewPlatformReady` event is dispatch and use it before calling the `window.flutter_inappwebview.callHandler` method.
```javascript
// execute inside the "flutterInAppWebViewPlatformReady" event listener
window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
 const args = [1, true, ['bar', 5], {foo: 'baz'}];
 window.flutter_inappwebview.callHandler('myHandlerName', ...args);
});

// or using a global flag variable
var isFlutterInAppWebViewReady = false;
window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
 isFlutterInAppWebViewReady = true;
});
// then, somewhere in your code
if (isFlutterInAppWebViewReady) {
 const args = [1, true, ['bar', 5], {foo: 'baz'}];
 window.flutter_inappwebview.callHandler('myHandlerName', ...args);
}
```

Instead, if you are evaluating JavaScript code from the Dart (Flutter) side, you can call `window.flutter_inappwebview.callHandler` directly on the `onLoadStop` event (or after that) without listening the `flutterInAppWebViewPlatformReady` JavaScript event because, at that time, it will be already fired. For example:
```dart
onLoadStop: (controller, url) async {
  await controller.evaluateJavascript(source: """
    const args = [1, true, ['bar', 5], {foo: 'baz'}];
    window.flutter_inappwebview.callHandler('myHandlerName', ...args);
  """);
},
```

`window.flutter_inappwebview.callHandler` returns a JavaScript [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that can be used to get the json result returned by the `callback`.
In this case, simply return data that you want to send and it will be automatically json encoded using `jsonEncode` from the `dart:convert` library.

Here is an example of communication:
```dart
import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  }
  
  runApp(new MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {

  InAppWebViewGroupOptions options = InAppWebViewGroupOptions(
      android: AndroidInAppWebViewOptions(
        useHybridComposition: true,
      ),);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(title: Text("JavaScript Handlers")),
          body: SafeArea(
              child: Column(children: <Widget>[
                Expanded(
                  child: InAppWebView(
                    initialData: InAppWebViewInitialData(
                        data: """
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    </head>
    <body>
        <h1>JavaScript Handlers</h1>
        <script>
            window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
                window.flutter_inappwebview.callHandler('handlerFoo')
                  .then(function(result) {
                    // print to the console the data coming
                    // from the Flutter side.
                    console.log(JSON.stringify(result));
                    
                    window.flutter_inappwebview
                      .callHandler('handlerFooWithArgs', 1, true, ['bar', 5], {foo: 'baz'}, result);
                });
            });
        </script>
    </body>
</html>
                      """
                    ),
                    initialOptions: options,
                    onWebViewCreated: (controller) {
                      controller.addJavaScriptHandler(handlerName: 'handlerFoo', callback: (args) {
                        // return data to the JavaScript side!
                        return {
                          'bar': 'bar_value', 'baz': 'baz_value'
                        };
                      });

                      controller.addJavaScriptHandler(handlerName: 'handlerFooWithArgs', callback: (args) {
                        print(args);
                        // it will print: [1, true, [bar, 5], {foo: baz}, {bar: bar_value, baz: baz_value}]
                      });
                    },
                    onConsoleMessage: (controller, consoleMessage) {
                      print(consoleMessage);
                      // it will print: {message: {"bar":"bar_value","baz":"baz_value"}, messageLevel: 1}
                    },
                  ),
                ),
              ]))),
    );
  }
}
```

Another way to communicate with JavaScript is to evaluate some JavaScript code using, for example, the `InAppWebViewController.evaluateJavascript` method.
You could set up a `message` event listener (used with [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)) or a custom event listener (see [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for details), such as:
```javascript
// message event listener
window.addEventListener("message", (event) => {
  console.log(event.data);
}, false);

// or custom event listener
window.addEventListener("myCustomEvent", (event) => {
  console.log(event.detail);
}, false);
```
And then, you can dispatch the custom JavaScript event whenever and wherever you want:
```javascript
// using postMessage method
window.postMessage({foo: 1, bar: false});

// or dispatching a custom event
const event = new CustomEvent("myCustomEvent", {
    detail: {foo: 1, bar: false}
});
window.dispatchEvent(event);
```

So, you can set up these event listeners at runtime using the `InAppWebViewController.evaluateJavascript` method or inside the web app itself and dispatch these events using the same method, for example:
```dart
onLoadStop: (controller, url) async {
  await controller.evaluateJavascript(source: """
    window.addEventListener("myCustomEvent", (event) => {
      console.log(JSON.stringify(event.detail));
    }, false);
  """);

  await Future.delayed(Duration(seconds: 5));

  controller.evaluateJavascript(source: """
    const event = new CustomEvent("myCustomEvent", {
      detail: {foo: 1, bar: false}
    });
    window.dispatchEvent(event);
  """);
},
onConsoleMessage: (controller, consoleMessage) {
  print(consoleMessage);
  // it will print: {message: {"foo":1,"bar":false}, messageLevel: 1}
},
```

## Web Message Channels

Web Message Channels are the representation of the [HTML5 message channels](https://html.spec.whatwg.org/multipage/web-messaging.html#message-channels). See [Channel Messaging API](https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API) for more details.

It allows you to create a new message channel and send data through it via its two `WebMessagePort` properties:
- `port1`, that is the first `WebMessagePort`;
- `port2`, that is the second `WebMessagePort`.

To create a Web Message Channel, you need to use the `InAppWebViewController.createWebMessageChannel` method.
This method should be called when the page is loaded, for example, when the `WebView.onLoadStop` event is fired, otherwise, the `WebMessageChannel` won't work.

```dart
if (!Platform.isAndroid || await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.CREATE_WEB_MESSAGE_CHANNEL)) {
  var webMessageChannel = await controller.createWebMessageChannel();
  var port1 = webMessageChannel!.port1;
  var port2 = webMessageChannel.port2;
}
```

:::caution Note for Android
  This method should only be called if `AndroidWebViewFeature.isFeatureSupported` returns `true` for `AndroidWebViewFeature.CREATE_WEB_MESSAGE_CHANNEL`.
:::

The Dart side that created the channel uses `port1`, and the JavaScript side at the other end of the port uses `port2`. You send a message to `port2`, and transfer the port over to the other browsing context using `InAppWebViewController.postWebMessage` method along with the message to send, and the object to transfer ownership of, in this case, the port itself.

When these transferable port objects are transferred, they are "neutered" on the previous context, the one they previously belonged to. For instance, a port, when is sent to JavaScript, cannot be used to send or receive messages at the Dart side anymore. Also, different from HTML5 Spec, a port cannot be transferred if one of these has ever happened:
- a message callback was set;
- a message was posted on it.

A transferred port cannot be closed by the application, since the ownership is also transferred.

To listen for the messages on a port from the Dart side, you need to set the `WebMessageCallback` using the `WebMessagePort.setWebMessageCallback` method. You could then respond by sending a message back to the original document using the `WebMessagePort.postMessage` method.

When you want to stop sending messages down the channel, you can invoke `WebMessagePort.close` to close the ports. A closed port cannot be transferred or cannot be reopened to send messages.

To be able to listen to messages from the JavaScript side, you need to first "capture" the port coming from the Dart side.

Here is an example of communication:
```dart
import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  if (Platform.isAndroid) {
    await AndroidInAppWebViewController.setWebContentsDebuggingEnabled(true);
  }

  runApp(new MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {

  InAppWebViewGroupOptions options = InAppWebViewGroupOptions(
    android: AndroidInAppWebViewOptions(
      useHybridComposition: true,
    ),);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(title: Text("Web Message Channels")),
          body: SafeArea(
              child: Column(children: <Widget>[
                Expanded(
                  child: InAppWebView(
                    initialData: InAppWebViewInitialData(
                        data: """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebMessageChannel Test</title>
</head>
<body>
    <!-- when you click this button, it will send a message to the Dart side -->
    <button id="button" onclick="port.postMessage(input.value);" />Send</button>
    <br />
    <input id="input" type="text" value="JavaScript To Native" />
    
    <script>
      // variable that will represents the port used to communicate with the Dart side
      var port;
      // listen for messages
      window.addEventListener('message', function(event) {
          if (event.data == 'capturePort') {
              // capture port2 coming from the Dart side
              if (event.ports[0] != null) {
                  // the port is ready for communication,
                  // so you can use port.postMessage(message); wherever you want
                  port = event.ports[0];
                  // To listen to messages coming from the Dart side, set the onmessage event listener
                  port.onmessage = function (event) {
                      // event.data contains the message data coming from the Dart side 
                      console.log(event.data);
                  };
              }
          }
      }, false);
    </script>
</body>
</html>
"""),
                    initialOptions: options,
                    onConsoleMessage: (controller, consoleMessage) {
                      print("Message coming from the Dart side: ${consoleMessage.message}");
                    },
                    onLoadStop: (controller, url) async {
                      if (!Platform.isAndroid || await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.CREATE_WEB_MESSAGE_CHANNEL)) {
                        // wait until the page is loaded, and then create the Web Message Channel
                        var webMessageChannel = await controller.createWebMessageChannel();
                        var port1 = webMessageChannel!.port1;
                        var port2 = webMessageChannel.port2;
  
                        // set the web message callback for the port1
                        await port1.setWebMessageCallback((message) async {
                          print("Message coming from the JavaScript side: $message");
                          // when it receives a message from the JavaScript side, respond back with another message.
                          await port1.postMessage(WebMessage(data: message! + " and back"));
                        });
  
                        // transfer port2 to the webpage to initialize the communication
                        await controller.postWebMessage(message: WebMessage(data: "capturePort", ports: [port2]), targetOrigin: Uri.parse("*"));
                      }
                    },
                  ),
                ),
              ])
          )
      ),
    );
  }
}
```

## Web Message Listeners

Web Message Listeners are similar to the JavaScript Handlers and Web Message Channels. It allows to inject a JavaScript object into each frame that the `WebMessageListener` will listen on.

To add a Web Message Listener, you need to use the `InAppWebViewController.addWebMessageListener` method. This method should be called before the webpage that uses it is loaded, for example when the `WebView.onWebViewCreated` event is fired:
```dart
child: InAppWebView(
  onWebViewCreated: (controller) async {
   // add first all of your web message listeners
   if (!Platform.isAndroid || await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.WEB_MESSAGE_LISTENER)) {
     await controller.addWebMessageListener(WebMessageListener(
       jsObjectName: "myObject",
       allowedOriginRules: Set.from(["https://*.example.com"]),
       onPostMessage: (message, sourceOrigin, isMainFrame, replyProxy) {
         replyProxy.postMessage("Got it!");
       },
     ));
   }
   
   // then load your URL
   await controller.loadUrl(urlRequest: URLRequest(url: Uri.parse("https://www.example.com")));
  },
),
``` 

:::caution Note for Android
  This method should only be called if `AndroidWebViewFeature.isFeatureSupported` returns `true` for `AndroidWebViewFeature.WEB_MESSAGE_LISTENER`.
:::

The injected JavaScript object will be named `WebMessageListener.jsObjectName` in the global scope. This will inject the JavaScript object in any frame whose origin matches `WebMessageListener.allowedOriginRules` for every navigation after this call, and the JavaScript object will be available immediately when the page begins to load.

Each `WebMessageListener.allowedOriginRules` entry must follow the format `SCHEME "://" [ HOSTNAME_PATTERN [ ":" PORT ] ]`, each part is explained in the below table:

<table class="table">
   <colgroup>
      <col width="25%" />
   </colgroup>
   <tbody>
      <tr>
         <th>Rule</th>
         <th>Description</th>
         <th>Example</th>
      </tr>
      <tr>
         <td>http/https with hostname</td>
         <td>
            <code translate="no" dir="ltr">SCHEME</code> is http or https; <code translate="no" dir="ltr">HOSTNAME_&lt;wbr&gt;PATTERN</code> is a regular hostname; <code translate="no" dir="ltr">PORT</code> is optional, when not present, the rule will match port <code translate="no" dir="ltr">80</code> for http and port <code translate="no" dir="ltr">443</code> for https.
         </td>
         <td>
            <ul>
               <li><code translate="no" dir="ltr">https://foobar.com:8080</code> - Matches https:// URL on port 8080, whose normalized host is foobar.com.</li>
               <li><code translate="no" dir="ltr">https://www.example.com</code> - Matches https:// URL on port 443, whose normalized host is www.example.com.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>http/https with pattern matching</td>
         <td>
            <code translate="no" dir="ltr">SCHEME</code> is http or https; <code translate="no" dir="ltr">HOSTNAME_&lt;wbr&gt;PATTERN</code> is a sub-domain matching pattern with a leading <code translate="no" dir="ltr">*.&lt;wbr&gt;</code>; <code translate="no" dir="ltr">PORT</code> is optional, when not present, the rule will match port <code translate="no" dir="ltr">80</code> for http and port <code translate="no" dir="ltr">443</code> for https.
         </td>
         <td>
            <ul>
               <li><code translate="no" dir="ltr">https://\*.example.com</code> - Matches https://calendar.example.com and https://foo.bar.example.com but not https://example.com.</li>
               <li><code translate="no" dir="ltr">https://\*.example.com:8080</code> - Matches https://calendar.example.com:8080</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>http/https with IP literal</td>
         <td>
            <code translate="no" dir="ltr">SCHEME</code> is https or https; <code translate="no" dir="ltr">HOSTNAME_&lt;wbr&gt;PATTERN</code> is IP literal; <code translate="no" dir="ltr">PORT</code> is optional, when not present, the rule will match port <code translate="no" dir="ltr">80</code> for http and port <code translate="no" dir="ltr">443</code> for https.
         </td>
         <td>
            <ul>
               <li><code translate="no" dir="ltr">https://127.0.0.1</code> - Matches https:// URL on port 443, whose IPv4 address is 127.0.0.1</li>
               <li><code translate="no" dir="ltr">https://[::1]</code> or <code translate="no" dir="ltr">https://[0:0::1]</code>- Matches any URL to the IPv6 loopback address with port 443.</li>
               <li><code translate="no" dir="ltr">https://[::1]:99</code> - Matches any https:// URL to the IPv6 loopback on port 99.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>Custom scheme</td>
         <td>
            <code translate="no" dir="ltr">SCHEME</code> is a custom scheme; <code translate="no" dir="ltr">HOSTNAME_&lt;wbr&gt;PATTERN</code> and <code translate="no" dir="ltr">PORT</code> must not be present.
         </td>
         <td>
            <ul>
               <li><code translate="no" dir="ltr">my-app-scheme://</code> - Matches any my-app-scheme:// URL.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code translate="no" dir="ltr">*</code></td>
         <td>Wildcard rule, matches any origin.</td>
         <td>
            <ul>
               <li><code translate="no" dir="ltr">*</code></li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

Note that this is a powerful API, as the JavaScript object will be injected when the frame's origin matches any one of the allowed origins. The HTTPS scheme is strongly recommended for security; allowing HTTP origins exposes the injected object to any potential network-based attackers. If a wildcard "*" is provided, it will inject the JavaScript object to all frames. A wildcard should only be used if the app wants **any** third party web page to be able to use the injected object. When using a wildcard, the app must treat received messages as untrustworthy and validate any data carefully.

This method can be called multiple times to inject multiple JavaScript objects.

Let's say the injected JavaScript object is named `myObject`. We will have following methods on that object once it is available to use:

```javascript
// Web page (in JavaScript)
// message needs to be a JavaScript String, MessagePorts is an optional parameter.
myObject.postMessage(message[, MessagePorts]) // on Android
myObject.postMessage(message) // on iOS

// To receive messages posted from the app side, assign a function to the "onmessage"
// property. This function should accept a single "event" argument. "event" has a "data"
// property, which is the message string from the app side.
myObject.onmessage = function(event) { ... }

// To be compatible with DOM EventTarget's addEventListener, it accepts type and listener
// parameters, where type can be only "message" type and listener can only be a JavaScript
// function for myObject. An event object will be passed to listener with a "data" property,
// which is the message string from the app side.
myObject.addEventListener(type, listener)

// To be compatible with DOM EventTarget's removeEventListener, it accepts type and listener
// parameters, where type can be only "message" type and listener can only be a JavaScript
// function for myObject.
myObject.removeEventListener(type, listener)
```

We start the communication between JavaScript and the app from the JavaScript side. In order to send message from the app to JavaScript, it needs to post a message from JavaScript first, so the app will have a `JavaScriptReplyProxy` object to respond. Example:

```javascript
// Web page (in JavaScript)
myObject.onmessage = function(event) {
  // prints "Got it!" when we receive the app's response.
  console.log(event.data);
}
myObject.postMessage("I'm ready!");
```

```dart
// Flutter App
child: InAppWebView(
  onWebViewCreated: (controller) async {
   if (!Platform.isAndroid || await AndroidWebViewFeature.isFeatureSupported(AndroidWebViewFeature.WEB_MESSAGE_LISTENER)) {
     await controller.addWebMessageListener(WebMessageListener(
       jsObjectName: "myObject",
       onPostMessage: (message, sourceOrigin, isMainFrame, replyProxy) {
         // do something about message, sourceOrigin and isMainFrame.
         replyProxy.postMessage("Got it!");
       },
     ));
   }
   await controller.loadUrl(urlRequest: URLRequest(url: Uri.parse("https://www.example.com")));
  },
),
```
