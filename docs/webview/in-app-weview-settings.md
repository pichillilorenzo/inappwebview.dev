---
title: InAppWebViewSettings
sidebar_position: 2
date: 2022-12-03 00:00:00
---

The `InAppWebViewSettings` class represents all the WebView settings available.

---

[accessibilityIgnoresInvertColors](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/accessibilityIgnoresInvertColors.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value indicating whether the WebView ignores an accessibility request to invert its colors. The default value
is `false`.

[algorithmicDarkeningAllowed](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/algorithmicDarkeningAllowed.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Control whether algorithmic darkening is allowed.

[allowBackgroundAudioPlaying](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowBackgroundAudioPlaying.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow audio playing when the app goes in background or the screen is locked or another app is opened.
However, there will be no controls in the notification bar or on the lockscreen. Also, make sure to not
call [PlatformInAppWebViewController.pause](https://pub.dev/documentation/flutter_inappwebview/PlatformInAppWebViewController/pause.html),
otherwise it will stop audio playing. The default value is `false`.

[allowContentAccess](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowContentAccess.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Enables or disables content URL access within WebView. Content URL access allows WebView to load content from a content
provider installed in the system. The default value is `true`.

[allowFileAccess](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowFileAccess.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Enables or disables file access within WebView. Note that this enables or disables file system access only. Assets and
resources are still accessible using `file:///android_asset` and `file:///android_res`. The default value is `true`.

[allowFileAccessFromFileURLs](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowFileAccessFromFileURLs.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether cross-origin requests in the context of a file scheme URL should be allowed to access content from other
file scheme URLs. Note that some accesses such as image HTML elements don't follow same-origin rules and aren't affected
by this setting.

[allowingReadAccessTo](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowingReadAccessTo.html) ↔ [WebUri](https://pub.dev/documentation/flutter_inappwebview/WebUri-class.html)?
\
Used in combination
with [PlatformWebViewCreationParams.initialUrlRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/initialUrlRequest.html)
or [PlatformWebViewCreationParams.initialData](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/initialData.html) (
using the `file://` scheme), it represents the URL from which to read the web content. This URL must be a file-based
URL (using the `file://` scheme). Specify the same value as
the [URLRequest.url](https://pub.dev/documentation/flutter_inappwebview/URLRequest/url.html) if you are using it with
the [PlatformWebViewCreationParams.initialUrlRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/initialUrlRequest.html)
parameter or
the [InAppWebViewInitialData.baseUrl](https://pub.dev/documentation/flutter_inappwebview/InAppWebViewInitialData/baseUrl.html)
if you are using it with
the [PlatformWebViewCreationParams.initialData](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/initialData.html)
parameter to prevent WebView from reading any other content. Specify a directory to give WebView permission to read
additional files in the specified directory.

[allowsAirPlayForMediaPlayback](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowsAirPlayForMediaPlayback.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow AirPlay. The default value is `true`.

[allowsBackForwardNavigationGestures](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowsBackForwardNavigationGestures.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow the horizontal swipe gestures trigger back-forward list navigations. The default value is `true`.

[allowsInlineMediaPlayback](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowsInlineMediaPlayback.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow HTML5 media playback to appear inline within the screen layout, using browser-supplied controls
rather than native controls. For this to work, add the `webkit-playsinline` attribute to any `<video>` elements. The
default value is `false`.

[allowsLinkPreview](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowsLinkPreview.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow that pressing on a link displays a preview of the destination for the link. The default value
is `true`.

[allowsPictureInPictureMediaPlayback](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowsPictureInPictureMediaPlayback.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow HTML5 videos play picture-in-picture. The default value is `true`.

[allowUniversalAccessFromFileURLs](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/allowUniversalAccessFromFileURLs.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether cross-origin requests in the context of a file scheme URL should be allowed to access content from any
origin. This includes access to content from other file scheme URLs or web contexts. Note that some access such as image
HTML elements doesn't follow same-origin rules and isn't affected by this setting.

[alwaysBounceHorizontal](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/alwaysBounceHorizontal.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that determines whether bouncing always occurs when horizontal scrolling reaches the end of the content
view. If this property is set to `true`
and [InAppWebViewSettings.disallowOverScroll](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disallowOverScroll.html)
is `false`, horizontal dragging is allowed even if the content is smaller than the bounds of the scroll view. The
default value is `false`.

[alwaysBounceVertical](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/alwaysBounceVertical.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that determines whether bouncing always occurs when vertical scrolling reaches the end of the content.
If this property is set to `true`
and [InAppWebViewSettings.disallowOverScroll](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disallowOverScroll.html)
is `false`, vertical dragging is allowed even if the content is smaller than the bounds of the scroll view. The default
value is `false`.

[appCachePath](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/appCachePath.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the path to the Application Caches files. In order for the Application Caches API to be enabled, this option must
be set a path to which the application can write. This option is used one time: repeated calls are ignored.

[applePayAPIEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/applePayAPIEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to enable Apple Pay API for the `WebView` at its first page load or on the next page load (
using [PlatformInAppWebViewController.setOptions](https://pub.dev/documentation/flutter_inappwebview/PlatformInAppWebViewController/setOptions.html)).
The default value is `false`.

[applicationNameForUserAgent](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/applicationNameForUserAgent.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Append to the existing user-agent. Setting userAgent will override this.

[automaticallyAdjustsScrollIndicatorInsets](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/automaticallyAdjustsScrollIndicatorInsets.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Configures whether the scroll indicator insets are automatically adjusted by the system. The default value is `false`.

[blockNetworkImage](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/blockNetworkImage.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView should not load image resources from the network (resources accessed via http and https URI
schemes). The default value is `false`.

[blockNetworkLoads](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/blockNetworkLoads.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView should not load resources from the network. The default value is `false`.

[builtInZoomControls](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/builtInZoomControls.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if the WebView should use its built-in zoom mechanisms. The default value is `true`.

[cacheEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/cacheEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether WebView should use browser caching. The default value is `true`.

[cacheMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/cacheMode.html) ↔ [CacheMode](https://pub.dev/documentation/flutter_inappwebview/CacheMode-class.html)?
\
Overrides the way the cache is used. The way the cache is used is based on the navigation type. For a normal page load,
the cache is checked and content is re-validated as needed. When navigating back, content is not revalidated, instead
the content is just retrieved from the cache. The default value
is [CacheMode.LOAD\_DEFAULT](https://pub.dev/documentation/flutter_inappwebview/CacheMode/LOAD_DEFAULT-constant.html).

[clearCache](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/clearCache.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Use [PlatformInAppWebViewController.clearAllCache](https://pub.dev/documentation/flutter_inappwebview/PlatformInAppWebViewController/clearAllCache.html)
instead.

[clearSessionCache](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/clearSessionCache.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Use [PlatformCookieManager.removeSessionCookies](https://pub.dev/documentation/flutter_inappwebview/PlatformCookieManager/removeSessionCookies.html)
instead.

[contentBlockers](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/contentBlockers.html) ↔ [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[ContentBlocker](https://pub.dev/documentation/flutter_inappwebview/ContentBlocker-class.html)\>?
\
List of [ContentBlocker](https://pub.dev/documentation/flutter_inappwebview/ContentBlocker-class.html) that are a set of
rules used to block content in the browser window.

[contentInsetAdjustmentBehavior](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/contentInsetAdjustmentBehavior.html) ↔ [ScrollViewContentInsetAdjustmentBehavior](https://pub.dev/documentation/flutter_inappwebview/ScrollViewContentInsetAdjustmentBehavior-class.html)?
\
Configures how safe area insets are added to the adjusted content inset. The default value
is [ScrollViewContentInsetAdjustmentBehavior.NEVER](https://pub.dev/documentation/flutter_inappwebview/ScrollViewContentInsetAdjustmentBehavior/NEVER-constant.html).

[cursiveFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/cursiveFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the cursive font family name. The default value is `"cursive"`.

[databaseEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/databaseEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if you want the database storage API is enabled. The default value is `true`.

[dataDetectorTypes](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/dataDetectorTypes.html) ↔ [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[DataDetectorTypes](https://pub.dev/documentation/flutter_inappwebview/DataDetectorTypes-class.html)\>?
\
Specifying a dataDetectoryTypes value adds interactivity to web content that matches the value. For example, Safari adds
a link to “apple.com” in the text “Visit apple.com” if the dataDetectorTypes property is set
to [DataDetectorTypes.LINK](https://pub.dev/documentation/flutter_inappwebview/DataDetectorTypes/LINK-constant.html).
The default value
is [DataDetectorTypes.NONE](https://pub.dev/documentation/flutter_inappwebview/DataDetectorTypes/NONE-constant.html).

[decelerationRate](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/decelerationRate.html) ↔ [ScrollViewDecelerationRate](https://pub.dev/documentation/flutter_inappwebview/ScrollViewDecelerationRate-class.html)?
\
A [ScrollViewDecelerationRate](https://pub.dev/documentation/flutter_inappwebview/ScrollViewDecelerationRate-class.html)
value that determines the rate of deceleration after the user lifts their finger. The default value
is [ScrollViewDecelerationRate.NORMAL](https://pub.dev/documentation/flutter_inappwebview/ScrollViewDecelerationRate/NORMAL-constant.html).

[defaultFixedFontSize](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/defaultFixedFontSize.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the default fixed font size. The default value is `16`.

[defaultFontSize](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/defaultFontSize.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the default font size. The default value is `16`.

[defaultTextEncodingName](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/defaultTextEncodingName.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the default text encoding name to use when decoding html pages. The default value is `"UTF-8"`.

[defaultVideoPoster](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/defaultVideoPoster.html) ↔ [Uint8List](https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html)?
\
When not playing, video elements are represented by a 'poster' image. The image to use can be specified by the poster
attribute of the video tag in HTML. If the attribute is absent, then a default poster will be used. This property allows
the WebView to provide that default image.

[disableContextMenu](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableContextMenu.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable context menu. The default value is `false`.

[disabledActionModeMenuItems](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disabledActionModeMenuItems.html) ↔ [ActionModeMenuItem](https://pub.dev/documentation/flutter_inappwebview/ActionModeMenuItem-class.html)?
\
Disables the action mode menu items according to menuItems flag.

[disableDefaultErrorPage](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableDefaultErrorPage.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the default Android WebView’s internal error page should be suppressed or displayed for bad
navigations. `true` means suppressed (not shown), `false` means it will be displayed. The default value is `false`.

[disableHorizontalScroll](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableHorizontalScroll.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable horizontal scroll. The default value is `false`.

[disableInputAccessoryView](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableInputAccessoryView.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable
the [inputAccessoryView](https://developer.apple.com/documentation/uikit/uiresponder/1621119-inputaccessoryview) above
system keyboard. The default value is `false`.

[disableLongPressContextMenuOnLinks](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableLongPressContextMenuOnLinks.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable the context menu (copy, select, etc.) that is shown when the user emits a long press event on a
HTML link. This is implemented using also JavaScript, so it must be enabled or it won't work. The default value
is `false`.

[disableVerticalScroll](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disableVerticalScroll.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable vertical scroll. The default value is `false`.

[disallowOverScroll](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/disallowOverScroll.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to disable the bouncing of the WebView when the scrolling has reached an edge of the content. The default
value is `false`.

[displayZoomControls](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/displayZoomControls.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if the WebView should display on-screen zoom controls when using the built-in zoom mechanisms. The default
value is `false`.

[domStorageEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/domStorageEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if you want the DOM storage API is enabled. The default value is `true`.

[enableViewportScale](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/enableViewportScale.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow a viewport meta tag to either disable or restrict the range of user scaling. The default value
is `false`.

[enterpriseAuthenticationAppLinkPolicyEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/enterpriseAuthenticationAppLinkPolicyEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether EnterpriseAuthenticationAppLinkPolicy if set by admin is allowed to have any effect on WebView.

[fantasyFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/fantasyFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the fantasy font family name. The default value is `"fantasy"`.

[fixedFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/fixedFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the fixed font family name. The default value is `"monospace"`.

[forceDark](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/forceDark.html) ↔ [ForceDark](https://pub.dev/documentation/flutter_inappwebview/ForceDark-class.html)?
\
Set the force dark mode for this WebView. The default value
is [ForceDark.OFF](https://pub.dev/documentation/flutter_inappwebview/ForceDark/OFF-constant.html).

[forceDarkStrategy](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/forceDarkStrategy.html) ↔ [ForceDarkStrategy](https://pub.dev/documentation/flutter_inappwebview/ForceDarkStrategy-class.html)?
\
Sets whether Geolocation API is enabled. The default value is `true`. Set how WebView content should be darkened. The
default value
is [ForceDarkStrategy.PREFER\_WEB\_THEME\_OVER\_USER\_AGENT\_DARKENING](https://pub.dev/documentation/flutter_inappwebview/ForceDarkStrategy/PREFER_WEB_THEME_OVER_USER_AGENT_DARKENING-constant.html).

[geolocationEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/geolocationEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether Geolocation is enabled. The default is `true`.

[hardwareAcceleration](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/hardwareAcceleration.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Boolean value to enable Hardware Acceleration in the WebView. The default value is `true`.

[horizontalScrollBarEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/horizontalScrollBarEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Define whether the horizontal scrollbar should be drawn or not. The default value is `true`.

[horizontalScrollbarThumbColor](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/horizontalScrollbarThumbColor.html) ↔ [Color](https://api.flutter.dev/flutter/painting/Color-class.html)?
\
Sets the horizontal scrollbar thumb color.

[horizontalScrollbarTrackColor](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/horizontalScrollbarTrackColor.html) ↔ [Color](https://api.flutter.dev/flutter/painting/Color-class.html)?
\
Sets the horizontal scrollbar track color.

[iframeAllow](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeAllow.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Specifies a feature policy for the `<iframe>`. The policy defines what features are available to the `<iframe>` based on
the origin of the request (e.g. access to the microphone, camera, battery, web-share API, etc.).

[iframeAllowFullscreen](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeAllowFullscreen.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to true if the `<iframe>` can activate fullscreen mode by calling the `requestFullscreen()` method.

[iframeCsp](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeCsp.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
A Content Security Policy enforced for the embedded resource.

[iframeName](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeName.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
A string that reflects the `name` HTML attribute, containing a name by which to refer to the frame.

[iframeReferrerPolicy](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeReferrerPolicy.html) ↔ [ReferrerPolicy](https://pub.dev/documentation/flutter_inappwebview/ReferrerPolicy-class.html)?
\
A string that reflects the `referrerpolicy` HTML attribute indicating which referrer to use when fetching the linked
resource.

[iframeSandbox](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/iframeSandbox.html) ↔ [Set](https://api.flutter.dev/flutter/dart-core/Set-class.html)\<[Sandbox](https://pub.dev/documentation/flutter_inappwebview/Sandbox-class.html)\>?
\
Applies extra restrictions to the content in the frame.

[ignoresViewportScaleLimits](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/ignoresViewportScaleLimits.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if you want that the WebView should always allow scaling of the webpage, regardless of the author's
intent. The ignoresViewportScaleLimits property overrides the `user-scalable` HTML property in a webpage. The default
value is `false`.

[incognito](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/incognito.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to open a browser window with incognito mode. The default value is `false`.

[initialScale](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/initialScale.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the initial scale for this WebView. 0 means default. The behavior for the default scale depends on the state
of [useWideViewPort](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useWideViewPort.html)
and [loadWithOverviewMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/loadWithOverviewMode.html).
If the content fits into the WebView control by width, then the zoom is set to 100%. For wide content, the behavior
depends on the state
of [loadWithOverviewMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/loadWithOverviewMode.html).
If its value is true, the content will be zoomed out to be fit by width into the WebView control, otherwise not. If
initial scale is greater than 0, WebView starts with this value as initial scale. Please note that unlike the scale
properties in the viewport meta tag, this method doesn't take the screen density into account. The default is `0`.

[interceptOnlyAsyncAjaxRequests](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/interceptOnlyAsyncAjaxRequests.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `false` to be able to listen to also sync `XMLHttpRequest`s at
the [PlatformWebViewCreationParams.shouldInterceptAjaxRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldInterceptAjaxRequest.html)
event.

[isDirectionalLockEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isDirectionalLockEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that determines whether scrolling is disabled in a particular direction. If this property is `false`,
scrolling is permitted in both horizontal and vertical directions. If this property is `true` and the user begins
dragging in one general direction (horizontally or vertically), the scroll view disables scrolling in the other
direction. If the drag direction is diagonal, then scrolling will not be locked and the user can drag in any direction
until the drag completes. The default value is `false`.

[isElementFullscreenEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isElementFullscreenEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether fullscreen API is enabled or not.

[isFindInteractionEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isFindInteractionEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the web view's built-in find interaction native UI is enabled or not.

[isFraudulentWebsiteWarningEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isFraudulentWebsiteWarningEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value indicating whether warnings should be shown for suspected fraudulent content such as phishing or
malware. According to the official documentation, this feature is currently available in the following region: China.
The default value is `true`.

[isInspectable](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isInspectable.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Controls whether this WebView is inspectable in Web Inspector.

[isPagingEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isPagingEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that determines whether paging is enabled for the scroll view. If the value of this property is true,
the scroll view stops on multiples of the scroll view’s bounds when the user scrolls. The default value is `false`.

[isSiteSpecificQuirksModeEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isSiteSpecificQuirksModeEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value indicating whether WebKit will apply built-in workarounds (quirks) to improve compatibility with certain
known websites. You can disable site-specific quirks to help test your website without these workarounds. The default
value is `true`.

[isTextInteractionEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/isTextInteractionEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value indicating whether text interaction is enabled or not. The default value is `true`.

[javaScriptCanOpenWindowsAutomatically](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/javaScriptCanOpenWindowsAutomatically.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to allow JavaScript open windows without user interaction. The default value is `false`.

[javaScriptEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/javaScriptEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to enable JavaScript. The default value is `true`.

[layoutAlgorithm](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/layoutAlgorithm.html) ↔ [LayoutAlgorithm](https://pub.dev/documentation/flutter_inappwebview/LayoutAlgorithm-class.html)?
\
Sets the underlying layout algorithm. This will cause a re-layout of the WebView.

[limitsNavigationsToAppBoundDomains](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/limitsNavigationsToAppBoundDomains.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that indicates whether the web view limits navigation to pages within the app’s domain.
Check [App-Bound Domains](https://webkit.org/blog/10882/app-bound-domains/) for more details. The default value
is `false`.

[loadsImagesAutomatically](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/loadsImagesAutomatically.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView should load image resources. Note that this method controls loading of all images, including
those embedded using the data URI scheme. Note that if the value of this setting is changed from false to true, all
images resources referenced by content currently displayed by the WebView are loaded automatically. The default value
is `true`.

[loadWithOverviewMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/loadWithOverviewMode.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView loads pages in overview mode, that is, zooms out the content to fit on screen by width. This
setting is taken into account when the content width is greater than the width of the WebView control, for example,
when [useWideViewPort](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useWideViewPort.html)
is enabled. The default value is `false`.

[maximumViewportInset](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/maximumViewportInset.html) ↔ [EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html)?
\
Set maximum viewport inset to the largest inset a webpage may experience in your app's maximally expanded UI
configuration. Values must be either zero or positive. It must be larger
than [minimumViewportInset](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/minimumViewportInset.html).

[maximumZoomScale](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/maximumZoomScale.html) ↔ [double](https://api.flutter.dev/flutter/dart-core/double-class.html)?
\
A floating-point value that specifies the maximum scale factor that can be applied to the scroll view's content. This
value determines how large the content can be scaled. It must be greater than the minimum zoom scale for zooming to be
enabled. The default value is `1.0`.

[mediaPlaybackRequiresUserGesture](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/mediaPlaybackRequiresUserGesture.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to prevent HTML5 audio or video from autoplaying. The default value is `true`.

[mediaType](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/mediaType.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
The media type for the contents of the web view. When the value of this property is `null`, the web view derives the
current media type from the CSS media property of its content. If you assign a value other than `null` to this property,
the web view uses the value you provide instead. The default value of this property is `null`.

[minimumFontSize](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/minimumFontSize.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the minimum font size. The default value is `8` for Android, `0` for iOS.

[minimumLogicalFontSize](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/minimumLogicalFontSize.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the minimum logical font size. The default is `8`.

[minimumViewportInset](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/minimumViewportInset.html) ↔ [EdgeInsets](https://api.flutter.dev/flutter/painting/EdgeInsets-class.html)?
\
Set minimum viewport inset to the smallest inset a webpage may experience in your app's maximally collapsed UI
configuration. Values must be either zero or positive. It must be smaller
than [maximumViewportInset](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/maximumViewportInset.html).

[minimumZoomScale](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/minimumZoomScale.html) ↔ [double](https://api.flutter.dev/flutter/dart-core/double-class.html)?
\
A floating-point value that specifies the minimum scale factor that can be applied to the scroll view's content. This
value determines how small the content can be scaled. The default value is `1.0`.

[mixedContentMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/mixedContentMode.html) ↔ [MixedContentMode](https://pub.dev/documentation/flutter_inappwebview/MixedContentMode-class.html)?
\
Configures the WebView's behavior when a secure origin attempts to load a resource from an insecure origin.

[needInitialFocus](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/needInitialFocus.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Tells the WebView whether it needs to set a node. The default value is `true`.

[networkAvailable](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/networkAvailable.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Informs WebView of the network state. This is used to set the JavaScript property `window.navigator.isOnline` and
generates the online/offline event as specified in HTML5, sec. 5.7.7.

[offscreenPreRaster](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/offscreenPreRaster.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether this WebView should raster tiles when it is offscreen but attached to a window. Turning this on can avoid
rendering artifacts when animating an offscreen WebView on-screen. Offscreen WebViews in this mode use more memory. The
default value is `false`.

[overScrollMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/overScrollMode.html) ↔ [OverScrollMode](https://pub.dev/documentation/flutter_inappwebview/OverScrollMode-class.html)?
\
Sets the WebView's over-scroll mode. Setting the over-scroll mode of a WebView will have an effect only if the WebView
is capable of scrolling. The default value
is [OverScrollMode.IF\_CONTENT\_SCROLLS](https://pub.dev/documentation/flutter_inappwebview/OverScrollMode/IF_CONTENT_SCROLLS-constant.html).

[pageZoom](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/pageZoom.html) ↔ [double](https://api.flutter.dev/flutter/dart-core/double-class.html)?
\
The scale factor by which the web view scales content relative to its bounds. The default value of this property
is `1.0`, which displays the content without any scaling. Changing the value of this property is equivalent to setting
the CSS `zoom` property on all page content.

[preferredContentMode](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/preferredContentMode.html) ↔ [UserPreferredContentMode](https://pub.dev/documentation/flutter_inappwebview/UserPreferredContentMode-class.html)?
\
Sets the content mode that the WebView needs to use when loading and rendering a webpage. The default value
is [UserPreferredContentMode.RECOMMENDED](https://pub.dev/documentation/flutter_inappwebview/UserPreferredContentMode/RECOMMENDED-constant.html).

[regexToCancelSubFramesLoading](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/regexToCancelSubFramesLoading.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Regular expression used
by [PlatformWebViewCreationParams.shouldOverrideUrlLoading](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldOverrideUrlLoading.html)
event to cancel navigation requests for frames that are not the main frame. If the url request of a subframe matches the
regular expression, then the request of that subframe is canceled.

[rendererPriorityPolicy](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/rendererPriorityPolicy.html) ↔ [RendererPriorityPolicy](https://pub.dev/documentation/flutter_inappwebview/RendererPriorityPolicy-class.html)?
\
Sets the renderer priority policy for this WebView.

[requestedWithHeaderOriginAllowList](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/requestedWithHeaderOriginAllowList.html) ↔ [Set](https://api.flutter.dev/flutter/dart-core/Set-class.html)\<[String](https://api.flutter.dev/flutter/dart-core/String-class.html)\>?
\
Set an allow-list of origins to receive the X-Requested-With HTTP header from the WebView owning the
passed [InAppWebViewSettings](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings-class.html).

[resourceCustomSchemes](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/resourceCustomSchemes.html) ↔ [List](https://api.flutter.dev/flutter/dart-core/List-class.html)\<[String](https://api.flutter.dev/flutter/dart-core/String-class.html)\>?
\
List of custom schemes that the WebView must handle. Use
the [PlatformWebViewCreationParams.onLoadResourceWithCustomScheme](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onLoadResourceWithCustomScheme.html)
event to intercept resource requests with custom scheme.

[safeBrowsingEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/safeBrowsingEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether Safe Browsing is enabled. Safe Browsing allows WebView to protect against malware and phishing attacks by
verifying the links. Safe Browsing is enabled by default for devices which support it.

[sansSerifFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/sansSerifFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the sans-serif font family name. The default value is `"sans-serif"`.

[saveFormData](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/saveFormData.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView should save form data. In Android O, the platform has implemented a fully functional Autofill
feature to store form data. Therefore, the Webview form data save feature is disabled. Note that the feature will
continue to be supported on older versions of Android as before. The default value is `true`.

[scrollBarDefaultDelayBeforeFade](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/scrollBarDefaultDelayBeforeFade.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Defines the delay in milliseconds that a scrollbar waits before fade out.

[scrollBarFadeDuration](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/scrollBarFadeDuration.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Defines the scrollbar fade duration in milliseconds.

[scrollbarFadingEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/scrollbarFadingEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Defines whether scrollbars will fade when the view is not scrolling. The default value is `true`.

[scrollBarStyle](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/scrollBarStyle.html) ↔ [ScrollBarStyle](https://pub.dev/documentation/flutter_inappwebview/ScrollBarStyle-class.html)?
\
Specifies the style of the scrollbars. The scrollbars can be overlaid or inset. When inset, they add to the padding of
the view. And the scrollbars can be drawn inside the padding area or on the edge of the view. For example, if a view has
a background drawable and you want to draw the scrollbars inside the padding specified by the drawable, you can use
SCROLLBARS\_INSIDE\_OVERLAY or SCROLLBARS\_INSIDE\_INSET. If you want them to appear at the edge of the view, ignoring
the padding, then you can use SCROLLBARS\_OUTSIDE\_OVERLAY or SCROLLBARS\_OUTSIDE\_INSET. The default value
is [ScrollBarStyle.SCROLLBARS\_INSIDE\_OVERLAY](https://pub.dev/documentation/flutter_inappwebview/ScrollBarStyle/SCROLLBARS_INSIDE_OVERLAY-constant.html).

[scrollsToTop](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/scrollsToTop.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that controls whether the scroll-to-top gesture is enabled. The scroll-to-top gesture is a tap on the
status bar. When a user makes this gesture, the system asks the scroll view closest to the status bar to scroll to the
top. The default value is `true`.

[selectionGranularity](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/selectionGranularity.html) ↔ [SelectionGranularity](https://pub.dev/documentation/flutter_inappwebview/SelectionGranularity-class.html)?
\
The level of granularity with which the user can interactively select content in the web view. The default value
is [SelectionGranularity.DYNAMIC](https://pub.dev/documentation/flutter_inappwebview/SelectionGranularity/DYNAMIC-constant.html).

[serifFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/serifFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the serif font family name. The default value is `"sans-serif"`.

[sharedCookiesEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/sharedCookiesEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set `true` if shared cookies from `HTTPCookieStorage.shared` should used for every load request in the WebView. The
default value is `false`.

[shouldPrintBackgrounds](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/shouldPrintBackgrounds.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value that indicates whether to include any background color or graphics when printing content.

[standardFontFamily](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/standardFontFamily.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the standard font family name. The default value is `"sans-serif"`.

[supportMultipleWindows](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/supportMultipleWindows.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Sets whether the WebView supports multiple windows. If set
to `true`, [PlatformWebViewCreationParams.onCreateWindow](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onCreateWindow.html)
event must be implemented by the host application. The default value is `false`.

[supportZoom](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/supportZoom.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `false` if the WebView should not support zooming using its on-screen zoom controls and gestures. The default
value is `true`.

[suppressesIncrementalRendering](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/suppressesIncrementalRendering.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if you want the WebView suppresses content rendering until it is fully loaded into memory. The default
value is `false`.

[textZoom](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/textZoom.html) ↔ [int](https://api.flutter.dev/flutter/dart-core/int-class.html)?
\
Sets the text zoom of the page in percent. The default value is `100`.

[thirdPartyCookiesEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/thirdPartyCookiesEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Boolean value to enable third party cookies in the WebView. Used on Android Lollipop and above only as third party
cookies are enabled by default on Android Kitkat and below and on iOS. The default value is `true`.

[transparentBackground](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/transparentBackground.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to make the background of the WebView transparent. If your app has a dark theme, this can prevent a white
flash on initialization. The default value is `false`.

[underPageBackgroundColor](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/underPageBackgroundColor.html) ↔ [Color](https://api.flutter.dev/flutter/painting/Color-class.html)?
\
The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.

[upgradeKnownHostsToHTTPS](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/upgradeKnownHostsToHTTPS.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
A Boolean value indicating whether HTTP requests to servers known to support HTTPS should be automatically upgraded to
HTTPS requests. The default value is `true`.

[useHybridComposition](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useHybridComposition.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `false` to disable Flutter Hybrid Composition. The default value is `true`. Hybrid Composition is supported
starting with Flutter v1.20+.

[useOnDownloadStart](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useOnDownloadStart.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.onDownloadStartRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onDownloadStartRequest.html)
event.

[useOnLoadResource](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useOnLoadResource.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.onLoadResource](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onLoadResource.html)
event.

[useOnNavigationResponse](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useOnNavigationResponse.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen to
the [PlatformWebViewCreationParams.onNavigationResponse](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onNavigationResponse.html)
event.

[useOnRenderProcessGone](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useOnRenderProcessGone.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.onRenderProcessGone](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/onRenderProcessGone.html)
event.

[userAgent](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/userAgent.html) ↔ [String](https://api.flutter.dev/flutter/dart-core/String-class.html)?
\
Sets the user-agent for the WebView.

[useShouldInterceptAjaxRequest](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useShouldInterceptAjaxRequest.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.shouldInterceptAjaxRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldInterceptAjaxRequest.html)
event.

[useShouldInterceptFetchRequest](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useShouldInterceptFetchRequest.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.shouldInterceptFetchRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldInterceptFetchRequest.html)
event.

[useShouldInterceptRequest](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useShouldInterceptRequest.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.shouldInterceptRequest](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldInterceptRequest.html)
event.

[useShouldOverrideUrlLoading](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useShouldOverrideUrlLoading.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` to be able to listen at
the [PlatformWebViewCreationParams.shouldOverrideUrlLoading](https://pub.dev/documentation/flutter_inappwebview/PlatformWebViewCreationParams/shouldOverrideUrlLoading.html)
event.

[useWideViewPort](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/useWideViewPort.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Set to `true` if the WebView should enable support for the "viewport" HTML meta tag or should use a wide viewport. When
the value of the setting is false, the layout width is always set to the width of the WebView control in
device-independent (CSS) pixels. When the value is true and the page contains the viewport meta tag, the value of the
width specified in the tag is used. If the page does not contain the tag or does not provide a width, then a wide
viewport will be used. The default value is `true`.

[verticalScrollBarEnabled](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/verticalScrollBarEnabled.html) ↔ [bool](https://api.flutter.dev/flutter/dart-core/bool-class.html)?
\
Define whether the vertical scrollbar should be drawn or not. The default value is `true`.

[verticalScrollbarPosition](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/verticalScrollbarPosition.html) ↔ [VerticalScrollbarPosition](https://pub.dev/documentation/flutter_inappwebview/VerticalScrollbarPosition-class.html)?
\
Sets the position of the vertical scroll bar. The default value
is [VerticalScrollbarPosition.SCROLLBAR\_POSITION\_DEFAULT](https://pub.dev/documentation/flutter_inappwebview/VerticalScrollbarPosition/SCROLLBAR_POSITION_DEFAULT-constant.html).

[verticalScrollbarThumbColor](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/verticalScrollbarThumbColor.html) ↔ [Color](https://api.flutter.dev/flutter/painting/Color-class.html)?
\
Sets the vertical scrollbar thumb color.

[verticalScrollbarTrackColor](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/verticalScrollbarTrackColor.html) ↔ [Color](https://api.flutter.dev/flutter/painting/Color-class.html)?
\
Sets the vertical scrollbar track color.

[webViewAssetLoader](https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/InAppWebViewSettings/webViewAssetLoader.html) ↔ [WebViewAssetLoader](https://pub.dev/documentation/flutter_inappwebview/WebViewAssetLoader-class.html)?
\
Use a [WebViewAssetLoader](https://pub.dev/documentation/flutter_inappwebview/WebViewAssetLoader-class.html) instance to
load local files including application's static assets and resources using http(s):// URLs. Loading local files using
web-like URLs instead of `file://` is desirable as it is compatible with the Same-Origin policy.
