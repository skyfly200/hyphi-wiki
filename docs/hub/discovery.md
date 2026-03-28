# Device Discovery

<StatusBadge type="stable" label="NFC/QR" /> <StatusBadge type="draft" label="BLE Mesh" />

How Hyphi devices are discovered and paired by Hyphi Hub — via BLE scan, NFC tap, or QR code.

## BLE Scan

Hyphi Hub filters BLE advertisements by the LED Control service UUID:

```
f82d2279-9f54-4851-8394-377d54fb99bb
```

Any device advertising this service will appear in the scan picker.

## NFC Tag Format

Write an NDEF **text record** to your NFC tag with either:

```
hyphi://connect?name=Smart%20Sprout
```

or just the bare device name:

```
Smart Sprout
```

The app reads the tag, extracts the name hint, and opens the BLE picker pre-filtered to that device name.

::: tip Writing NFC tags
Use any standard NFC writing app (e.g. NFC Tools on Android). Write a plain text NDEF record — no special encoding required.
:::

## QR Code Format

Generate a QR code containing:

```
hyphi://connect?name=Smart%20Sprout
```

Print it on your device or enclosure. The app decodes the URL and opens the BLE picker pre-filtered by name.

## Browser Support

| Browser | BLE | NFC | QR |
|---------|-----|-----|----|
| Chrome Android | ✅ | ✅ | ✅ (camera) |
| Chrome Desktop | ✅ | ❌ | ✅ |
| Edge Desktop | ✅ | ❌ | ✅ |
| Safari / Firefox | ❌ | ❌ | ✅ |

> Safari does not support Web Bluetooth. Hyphi Hub falls back to demo mode on unsupported browsers.
