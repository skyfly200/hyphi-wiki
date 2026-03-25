# OWLS Firmware

<StatusBadge type="wip" />

The OWLS firmware layer runs on the ESP32 alongside WLED, implementing the BLE GATT server that exposes the OWLS protocol services.

## Architecture

OWLS FW communicates with WLED over the **WLED HTTP JSON API** on localhost (`127.0.0.1:80`). BLE write requests are translated into WLED API calls:

```
BLE Client write → OWLS GATT handler → WLED JSON API POST → LED update
BLE Client read  → WLED JSON API GET  → OWLS GATT read response
```

## Services Implemented

| Service | Status |
|---------|--------|
| LED Control (power, mode, brightness) | ✅ Done |
| Color, speed, cycle | ✅ Done |
| Audio reactive + threshold | ✅ Done |
| Battery level notify | ✅ Done |
| Temperature notify | ✅ Done |
| LED current notify | ✅ Done |
| Current time sync | ✅ Done |
| Metadata / capabilities | 🔧 In progress |

## Building

::: tip Source repository
OWLS firmware source will be linked here once the repo is public. Currently in private development.
:::

**Dependencies:**
- Arduino ESP32 core `>=2.0.0`
- ArduinoBLE or NimBLE-Arduino (NimBLE recommended for lower memory)
- ArduinoJson `>=6.0`

**Build target:**
- Arduino IDE or PlatformIO
- Board: `ESP32-C3 Dev Module` (Gloflora Clip) or `ESP32-S3 Dev Module` (Gloflora Home)

## NFC & QR Pairing

OWLS firmware also handles NFC tag reads (Android only) and QR code URL scheme:

```
hyphi://connect?name=Gloflora%20Home
```

The pairing flow in Hyphi Hub app:
1. Read NFC tag or scan QR
2. Extract device name hint from URL
3. BLE scan filtered to that name
4. Connect and authenticate
5. Begin GATT service discovery

See [Device Discovery](../owls/discovery) for tag/QR format details.
