# Firmware Overview

<StatusBadge type="stable" label="WLED" /> <StatusBadge type="wip" label="OWLs FW" />

Hyphi devices run two firmware layers:

| Layer | Purpose |
|-------|---------|
| **WLED** | LED effects engine, Wi-Fi AP/STA, HTTP/WebSocket API |
| **OWLs firmware** | BLE GATT server, OWLs service implementation |

On current hardware (Xiao ESP32), both layers run on the same MCU. WLED handles all LED rendering; the OWLs BLE layer runs as a background task translating BLE writes into WLED API calls.

## Firmware Stack

```
┌─────────────────────────────────┐
│          OWLs BLE Layer         │  ← Custom — handles BLE GATT, NFC, QR
│   (translates to WLED JSON API) │
├─────────────────────────────────┤
│             WLED                │  ← Open source LED FW — wled.me
│   (effects, Wi-Fi, presets)     │
├─────────────────────────────────┤
│        Arduino ESP32 Core       │
├─────────────────────────────────┤
│   ESP32 (Xiao C3 / S3 / Dev)   │
└─────────────────────────────────┘
```

## Quick Links

- [WLED Setup →](./wled-setup) — First flash and network config
- [WLED Custom Config →](./wled-config) — LED count, current limit, presets
- [OWLs Firmware →](./owls-fw) — BLE layer setup and build
- [Flashing Guide →](./flashing) — esptool, Arduino IDE, web flasher
- [OTA Updates →](./ota) — Over-the-air firmware updates
