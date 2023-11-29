---
slug: webview-content-blockers-flutter-inappwebview-6
title: "WebView Content Blockers — Flutter InAppWebView 6"
image: "article-banner.webp"
date: 2022-11-22 22:00:00
authors: [lorenzo]
tags: [inappwebview, webview, ad-blocker, content-blocker, content-blockers]
---

<head>
  <link rel="canonical" href="https://medium.com/@pichillilorenzo/webview-content-blockers-flutter-inappwebview-6-faba4d61c294" />
</head>

![Article banner](article-banner.webp)

In this article, we are going to understand how to create a custom Content Blocker for our WebView instances using the [flutter_inappwebview](https://github.com/pichillilorenzo/flutter_inappwebview) plugin.

Content Blockers are usually used for blocking ads, but you can also block any other content. Blocking behaviors include hiding elements, blocking loads, and, on iOS and macOS, stripping cookies from the WebView requests.

Keep in mind that, in general, Content Blockers cannot achieve the same level of functionalities as specialized extensions such as AdBlock or AdBlock Plus. Content Blockers are a set of rules that will never get any callbacks or notifications back from the WebView when it finds content it needs to block.

Through the `contentBlockers` property of the `InAppWebViewSettings` class, we can define a list of `ContentBlocker` instances that the WebView will use.

<!--truncate-->

### The ContentBlocker class

The `ContentBlocker` class is the class in which we define content-blocking behavior. Each one contains an **action** property and a **trigger** property. The action tells the WebView what to do when it encounters a match for the trigger. The trigger tells the WebView when to perform the corresponding action.

Here is a basic example:

```dart
initialSettings: InAppWebViewSettings(contentBlockers: \[  
  ContentBlocker(  
    trigger: ContentBlockerTrigger(  
      urlFilter: ".\*",  
      resourceType: \[  
        ContentBlockerTriggerResourceType.IMAGE,  
        ContentBlockerTriggerResourceType.STYLE\_SHEET  
      \]  
    ),  
    action: ContentBlockerAction(  
      type: ContentBlockerActionType.BLOCK  
    )  
  )  
\]),
```

In this example, we are saying to block the load of every image and stylesheet for every URL.

### Add triggers to your Content Blocker

A trigger must define the required `urlFilter` property, which specifies a regular expression as a string to match the URL against. The other properties are optional and modify the behavior of the trigger. For example, you can limit the trigger to specific domains or have it not apply when the WebView finds a match for a specific domain.

Here is an example of a Content Blocker with a trigger for image and style sheet resources that the WebView finds on any domain except those specified:

```dart
initialSettings: InAppWebViewSettings(contentBlockers: \[  
  ContentBlocker(  
    trigger: ContentBlockerTrigger(  
      urlFilter: ".\*",  
      resourceType: \[  
        ContentBlockerTriggerResourceType.IMAGE,  
        ContentBlockerTriggerResourceType.STYLE\_SHEET  
      \],  
      unlessDomain: \["example.com", "github.com", "pub.dev"\]  
    ),  
    action: ContentBlockerAction(  
      type: ContentBlockerActionType.BLOCK  
    )  
  )  
\]),
```

For deeper trigger customization, you can use the other properties of `ContentBlockerTrigger`:

*   urlFilterIsCaseSensitive: _If the URL matching should be case-sensitive. By default, it is case insensitive._
*   resourceType: _A list of “ContentBlockerTriggerResourceType” representing the resource types (how the browser intends to use the resource) that the rule should match. If not specified, the rule matches all resource types._
*   ifDomain: _A list of strings matched to a URL’s domain; limits action to a list of specific domains. Values must be lowercase ASCII, or punycode for non-ASCII. Add \* in front to match domain and subdomains. It can’t be used with “unlessDomain”._
*   unlessDomain: _A list of strings matched to a URL’s domain; acts on any site except domains in a provided list. Values must be lowercase ASCII, or punycode for non-ASCII. Add \* in front to match domain and subdomains. It can’t be used with “ifDomain”._
*   loadType: _A list of “ContentBlockerTriggerLoadType” that can include one of two mutually exclusive values. If not specified, the rule matches all load types. “ContentBlockerTriggerLoadType.FIRST\_PARTY” triggers only if the resource has the same scheme, domain, and port as the main page resource. “ContentBlockerTriggerLoadType.THIRD\_PARTY” triggers if the resource isn’t from the same domain as the main page resource._
*   ifTopUrl: _A list of strings matched to the entire main document URL; limits the action to a specific list of URL patterns. Values must be lowercase ASCII, or punycode for non-ASCII. It can’t be used with “unlessTopUrl”._
*   unlessTopUrl: _An array of strings matched to the entire main document URL; acts on any site except URL patterns in the provided list. Values must be lowercase ASCII, or punycode for non-ASCII. It can’t be used with “ifTopUrl”._
*   loadContext: _An array of strings that specify loading contexts._
*   ifFrameUrl: _A list of regular expressions to match iframes URL against._

Check the code documentation for each specific property to know which platform supports that feature.

### Add actions to your Content Blocker

When a trigger matches a resource, the WebView evaluates all the triggers and executes the actions in order.

Group the rules with similar actions together to improve performance. For example, first specify rules that block content loading, followed by rules that block cookies.

There are only two valid properties for actions: `type` and `selector`. An action type is required.  
If the type is `ContentBlockerActionType.CSS_DISPLAY_NONE`, a `selector` is required as well; otherwise, the `selector` is optional.

Here is a simple example:

```dart
initialSettings: InAppWebViewSettings(contentBlockers: \[  
  ContentBlocker(  
    trigger: ContentBlockerTrigger(  
      urlFilter: "https://flutter.dev/.\*",  
    ),  
    action: ContentBlockerAction(  
      type: ContentBlockerActionType.CSS\_DISPLAY\_NONE,  
      selector: '.notification, .media, #developer-story'  
    )  
  )  
\]),
```

Valid types are:

*   BLOCK: _Stops loading of the resource. If the resource was cached, the cache is ignored._
*   BLOCK\_COOKIES: _Strips cookies from the header before sending it to the server. This only blocks cookies otherwise acceptable to WebView’s privacy policy. Combining with “IGNORE\_PREVIOUS\_RULES” doesn’t override the browser’s privacy settings._
*   CSS\_DISPLAY\_NONE: _Hides elements of the page based on a CSS selector. A selector field contains the selector list. Any matching element has its display property set to none, which hides it._
*   MAKE\_HTTPS: _Changes a URL from http to https. URLs with a specified (nondefault) port and links using other protocols are unaffected._
*   IGNORE\_PREVIOUS\_RULES: _Ignores previously triggered actions._

Check the code documentation for each specific type to know which platform supports it.

### Creating a simple Ad Blocker

![ad-blocker-example-banner.webp](ad-blocker-example-banner.webp)

Let’s create a simple **ad blocker** using what we have learned.

```dart
import 'package:flutter/foundation.dart';  
import 'package:flutter/material.dart';  
import 'package:flutter\_inappwebview/flutter\_inappwebview.dart';  
  
Future main() async {  
  WidgetsFlutterBinding.ensureInitialized();  
  if (!kIsWeb &&  
      kDebugMode &&  
      defaultTargetPlatform == TargetPlatform.android) {  
    await InAppWebViewController.setWebContentsDebuggingEnabled(kDebugMode);  
  }  
  runApp(const MaterialApp(home: MyApp()));  
}  
  
class MyApp extends StatefulWidget {  
  const MyApp({Key? key}) : super(key: key);  
  
  @override  
  State<MyApp> createState() => \_MyAppState();  
}  
  
class \_MyAppState extends State<MyApp\> {  
  final GlobalKey webViewKey = GlobalKey();  
  
  // list of Ad URL filters to be used to block ads loading.  
  final adUrlFilters = \[  
    ".\*.doubleclick.net/.\*",  
    ".\*.ads.pubmatic.com/.\*",  
    ".\*.googlesyndication.com/.\*",  
    ".\*.google-analytics.com/.\*",  
    ".\*.adservice.google.\*/.\*",  
    ".\*.adbrite.com/.\*",  
    ".\*.exponential.com/.\*",  
    ".\*.quantserve.com/.\*",  
    ".\*.scorecardresearch.com/.\*",  
    ".\*.zedo.com/.\*",  
    ".\*.adsafeprotected.com/.\*",  
    ".\*.teads.tv/.\*",  
    ".\*.outbrain.com/.\*"  
  \];  
  
  final List<ContentBlocker> contentBlockers = \[\];  
  var contentBlockerEnabled = true;  
  
  InAppWebViewController? webViewController;  
  
  @override  
  void initState() {  
    super.initState();  
  
    // for each Ad URL filter, add a Content Blocker to block its loading.  
    for (final adUrlFilter in adUrlFilters) {  
      contentBlockers.add(ContentBlocker(  
          trigger: ContentBlockerTrigger(  
            urlFilter: adUrlFilter,  
          ),  
          action: ContentBlockerAction(  
            type: ContentBlockerActionType.BLOCK,  
          )));  
    }  
  
    // apply the "display: none" style to some HTML elements  
    contentBlockers.add(ContentBlocker(  
        trigger: ContentBlockerTrigger(  
          urlFilter: ".\*",  
        ),  
        action: ContentBlockerAction(  
            type: ContentBlockerActionType.CSS\_DISPLAY\_NONE,  
            selector: ".banner, .banners, .ads, .ad, .advert")));  
  }  
  
  @override  
  Widget build(BuildContext context) {  
    return Scaffold(  
        appBar: AppBar(  
          title: const Text("Ads Content Blocker"),  
          actions: \[  
            TextButton(  
              onPressed: () async {  
                contentBlockerEnabled = !contentBlockerEnabled;  
                if (contentBlockerEnabled) {  
                  await webViewController?.setSettings(  
                      settings: InAppWebViewSettings(  
                          contentBlockers: contentBlockers));  
                } else {  
                  await webViewController?.setSettings(  
                      settings: InAppWebViewSettings(contentBlockers: \[\]));  
                }  
                webViewController?.reload();  
  
                setState(() {});  
              },  
              style: TextButton.styleFrom(foregroundColor: Colors.white),  
              child: Text(contentBlockerEnabled ? 'Disable' : 'Enable'),  
            )  
          \],  
        ),  
        body: SafeArea(  
            child: Column(children: <Widget>\[  
          Expanded(  
            child: Stack(  
              children: \[  
                InAppWebView(  
                  key: webViewKey,  
                  initialUrlRequest:  
                      URLRequest(url: WebUri('https://www.tomshardware.com/')),  
                  initialSettings:  
                      InAppWebViewSettings(contentBlockers: contentBlockers),  
                  onWebViewCreated: (controller) {  
                    webViewController = controller;  
                  },  
                ),  
              \],  
            ),  
          ),  
        \])));  
  }  
}
```

Using these rules will prevent a bunch of ads to appear, such as Google Ads.

Click the Disable/Enable button to disable or enable the Ad Blocker feature.

![ios content blockers basic usage](ios-content-blockers-basic-usage.gif)

### Conclusion

Content Blockers allow us to write performant rules for blocking content in the WebView while respecting the user’s privacy.

Full project code is available at: [https://github.com/pichillilorenzo/flutter\_inappwebview\_examples/tree/main/webview\_ad\_blocker](https://github.com/pichillilorenzo/flutter_inappwebview_examples/tree/main/webview_ad_blocker)

That’s all for today!

If this project helps you in any way, please consider [making a donation](https://inappwebview.dev/donate)!

Are you using this plugin? Submit your app through the [Submit App](https://inappwebview.dev/submit-app/) page and follow the instructions.  
Check the [Showcase](https://inappwebview.dev/showcase/) page to see who is already using it!

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification ([contributors](https://github.com/pichillilorenzo/flutter_inappwebview#contributors-)). I want to thank all the people that are supporting the project in any way. Thanks a lot to all of you! 💙
