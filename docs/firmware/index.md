# Firmware Overview

Hyphi devices use different firmware depending on the product line.

| Product Line | Firmware | Controlled By |
|---|---|---|
| Home (GlowFlora Home, Clip) | WLED | WLED app / web UI |
| Wearable & Flow | Custom BLE firmware | Hyphi Hub PWA |

---

## WLED — Home Devices

[WLED](https://wled.me) is open source LED effects firmware for ESP32. Hyphi home devices ship with WLED pre-flashed.

- [WLED Setup →](./wled-setup) — First flash and network config
- [WLED Custom Config →](./wled-config) — LED count, current limit, presets
- [Flashing Guide →](./flashing) — esptool, Arduino IDE, web flasher
- [OTA Updates →](./ota) — Over-the-air firmware updates

## BLE Devices — Wearable & Flow

Wearable and flow-line devices run custom BLE firmware implementing the OWLS protocol. They connect directly to the [Hyphi Hub](https://github.com/skyfly200/hyphi-hub) PWA over Bluetooth — no Wi-Fi or cloud required.

- [BLE Device Firmware →](./owls-fw) — Build, flash, and service status
