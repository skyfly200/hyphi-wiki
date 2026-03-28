# Hyphi Hub

<StatusBadge type="wip" />

**Hyphi Hub** is the open-source PWA companion app for controlling OWLS-compatible devices over Bluetooth. It runs entirely in the browser — no app store, no install, no cloud.

- Source: [github.com/skyfly200/hyphi-hub](https://github.com/skyfly200/hyphi-hub)
- License: **MIT**
- Platform: **Web Bluetooth** (Chrome Android / Chrome Desktop / Edge)

## What It Does

- Scan for and connect to nearby OWLS BLE devices
- Control LED effects, brightness, color, speed, and cycle
- Discover devices via BLE scan, NFC tap, or QR code
- Sync effects across multiple devices

## Browser Support

Web Bluetooth has limited browser support — Hyphi Hub works best on Chrome for Android.

| Browser | BLE Control | NFC | QR |
|---------|------------|-----|----|
| Chrome Android | ✅ | ✅ | ✅ (camera) |
| Chrome Desktop | ✅ | ❌ | ✅ |
| Edge Desktop | ✅ | ❌ | ✅ |
| Safari / Firefox | ❌ | ❌ | ✅ |

> Safari and Firefox do not support Web Bluetooth. Hyphi Hub falls back to demo mode on unsupported browsers.

## Pages

- [Device Discovery →](./discovery) — BLE scan, NFC tap, QR pairing
