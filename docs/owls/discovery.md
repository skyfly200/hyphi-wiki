# Device Discovery

<StatusBadge type="draft" />

::: tip Coming Soon
Covers BLE advertisement format, NFC NDEF tag schema (`hyphi://connect?name=...`), QR code URL format, and the scan/pairing flow used in Hyphi Hub.
:::

## NFC Tag Format

Write an NDEF text record to your tag:

```
hyphi://connect?name=Smart%20Sprout
```

The companion app reads the tag, extracts the name hint, and opens the BLE picker pre-filtered to that device name.

## QR Code Format

Generate a QR containing the same URL:

```
hyphi://connect?name=Smart%20Sprout
```

Print it on your device enclosure. The app decodes the URL and opens the BLE picker.
