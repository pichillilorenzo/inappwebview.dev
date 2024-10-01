---
sidebar_position: 13
date: 2022-10-27 12:00:00
---

# WebUri

`WebUri` is a class that implements the `Uri` interface to maintain also the raw string value used by `Uri.parse`.

This class is used because some strings coming from the native platform side
are not parsed correctly or could lose letter case information,
so `rawValue` can be used as a fallback value.

The `forceToStringRawValue` property indicates whether to force the
usage of `rawValue` when calling `toString` or not.
Because `toString` is used to send URI strings to the native platform side,
this flag is useful when you want to send `rawValue` instead of `uriValue.toString()`.
The default value is `false`.

Use `isValidUri` to detect if `rawValue` has been parsed correctly.
If it is `false`, then `uriValue` will have the value of `Uri()`.

If `forceToStringRawValue` is `true` or `isValidUri` is `false`,
the `toString` method returns `rawValue`,
otherwise the value of `uriValue.toString()`.

Basic examples:
```dart
// InAppWebView example
InAppWebView(
  initialUrlRequest:
    URLRequest(url: WebUri('https://flutter.dev'))
)

// example of letter case difference
final uri = WebUri('scheme://customHostValue', forceToStringRawValue: false);
print(uri.rawValue); // scheme://customHostValue
print(uri.isValidUri); // true
print(uri.uriValue.toString()); // scheme://customhostvalue
print(uri.toString()); // scheme://customhostvalue

uri.forceToStringRawValue = true;
print(uri.toString()); // scheme://customHostValue

// example of a not valid URI
// Uncaught Error: FormatException: Invalid port (at character 14)
final invalidUri = WebUri('intent://not:valid_uri');
print(invalidUri.rawValue); // intent://not:valid_uri
print(invalidUri.isValidUri); // false
print(invalidUri.uriValue.toString()); // ''
print(invalidUri.toString()); // intent://not:valid_uri
```
