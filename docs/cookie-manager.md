---
sidebar_position: 6
date: 2022-12-10 12:00:00
---

# Cookie Manager

To manage `WebView` cookies, you can use the `CookieManager` class, which implements a singleton object (shared instance).

On Android, it is implemented using the [CookieManager](https://developer.android.com/reference/android/webkit/CookieManager) class.
On iOS and MacOS, it is implemented using the [WKHTTPCookieStore](https://developer.apple.com/documentation/webkit/wkhttpcookiestore) class.
On Web platform, it is implemented using Javascript.

## Basic Usage

:::caution Note for iOS below 11.0, MacOS 10.13 and Web platform (LIMITED SUPPORT!)
  In this case, almost all of the methods (`CookieManager.deleteAllCookies` and `CookieManager.getAllCookies` are not supported!) has been implemented using JavaScript because there is no other way to work with them on iOS below 11.0 and MacOS 10.13. Check [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) for JavaScript restrictions.
:::

Example:
```dart
// get the CookieManager instance
CookieManager cookieManager = CookieManager.instance();

// set the expiration date for the cookie in milliseconds
final expiresDate = DateTime.now().add(Duration(days: 3)).millisecondsSinceEpoch;
final url = Uri.parse("https://flutter.dev/");

// set the cookie
await cookieManager.setCookie(
  url: url,
  name: "myCookie",
  value: "myValue",
  expiresDate: expiresDate,
  isSecure: true,
);

// get cookies
List<Cookie> cookies = await cookieManager.getCookies(url: url);

// get a cookie
Cookie? cookie = await cookieManager.getCookie(url: url, name: "myCookie");

// delete a cookie
await cookieManager.deleteCookie(url: url, name: "myCookie");

// delete cookies
await cookieManager.deleteCookies(url: url, domain: ".flutter.dev");
```
