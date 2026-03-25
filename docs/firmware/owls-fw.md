# BLE Device Firmware

<StatusBadge type="wip" />

OWLS firmware runs on wearable and flow-line Hyphi devices. It implements a BLE GATT server that exposes the OWLS protocol services, making the device controllable via the [Hyphi Hub](https://github.com/skyfly200/hyphi-hub) PWA app.

::: tip Not for home devices
Home devices (Gloflora Home, etc.) run WLED and are not currently managed by Hyphi Hub. See [Roadmap](#roadmap) below.
:::

## How It Works

Hyphi Hub (running in the browser on Android/Chrome) connects over BLE and reads/writes OWLS GATT characteristics directly. There is no Wi-Fi or cloud involved — the app talks to the device peer-to-peer over Bluetooth.

```
Hyphi Hub PWA  ──BLE──▶  OWLS GATT Server  ──▶  LED hardware
(Android/Chrome)          (ESP32 firmware)
```

## Services Implemented

| Service | Status |
|---------|--------|
| LED Control (power, mode, brightness) | ✅ Done |
| Color, speed, cycle | ✅ Done |
| Audio reactive + thresholds | ✅ Done |
| Battery level notify | ✅ Done |
| Temperature notify | ✅ Done |
| LED current notify | ✅ Done |
| Current time sync | ✅ Done |
| Metadata / capabilities | 🔧 In progress |

See [BLE Services & UUIDs](../owls/ble-services) for the full characteristic reference.

## Building

::: tip Source repository
OWLS firmware source will be linked here once the repo is public. Currently in private development.
:::

**Dependencies:**
- Arduino ESP32 core `>=2.0.0`
- NimBLE-Arduino (recommended over ArduinoBLE for lower memory usage)
- ArduinoJson `>=6.0`

**Build target:**
- Arduino IDE or PlatformIO
- Board: `ESP32-C3 Dev Module` (wearable) or `ESP32-S3 Dev Module` (flow line)

## Roadmap

Home devices currently run WLED only and are not reachable from Hyphi Hub. A few paths to change that are being explored:

- **BLE bridge layer** — a thin firmware shim running alongside WLED on the ESP32 that translates OWLS BLE writes to WLED's local HTTP JSON API
- **Wi-Fi / mDNS discovery** — Hyphi Hub discovering home devices over the local network instead of BLE
- **WLED plugin / usermod** — contributing an OWLS usermod to WLED directly

No timeline set — contributions welcome once the firmware repo is public.
