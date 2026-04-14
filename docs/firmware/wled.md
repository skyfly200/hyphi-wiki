# WLED

<StatusBadge type="stable" /> <StatusBadge type="hardware" label="Home Devices" />

[WLED](https://wled.me) is open-source LED effects firmware for ESP32. Hyphi home devices — GlowFlora Clip and GlowFlora Home — ship with WLED pre-flashed and ready to go.

## What WLED Gives You

- **100+ built-in effects** — fire, rainbow, sparkle, audio-reactive, and more
- **Web UI + app control** — configure everything from a browser or the WLED app (iOS / Android)
- **Over-the-air updates** — flash new firmware without USB once it's on Wi-Fi
- **Segment control** — split your LEDs into independent zones with different effects
- **Preset system** — save and recall your favorite looks instantly

## Getting Started

| Step | Page |
|------|------|
| Connect to Wi-Fi and configure LED count | [WLED Setup →](./wled-setup) |
| Set brightness cap, current limit, presets | [WLED Custom Config →](./wled-config) |
| Flash from scratch (esptool / web flasher) | [Flashing Guide →](./flashing) |
| Push firmware updates over Wi-Fi | [OTA Updates →](./ota) |

## WLED + OWLS

Hyphi home devices run WLED out of the box. OWLS BLE control for home devices is on the roadmap — see [BLE Device Firmware](./owls-fw#roadmap) for details on the bridge layer being explored.

::: tip WLED Resources
- [wled.me](https://wled.me) — official WLED site
- [WLED Docs](https://kno.wled.ge) — full upstream documentation
- [WLED GitHub](https://github.com/Aircoookie/WLED) — source code and releases
:::
