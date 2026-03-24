# Gloflora Home

<StatusBadge type="hardware" /> <StatusBadge type="wip" label="Prototype v2" />

Gloflora Home is a larger LED art piece designed for living spaces, camp setups, and festival installations. Runs on dual 18650 cells for extended battery life.

## Specs

| | |
|-|-|
| MCU | Seeed Xiao ESP32-S3 |
| LEDs | 30× WS2812B |
| Power | 2× 18650 in parallel, USB-C charge |
| Firmware | WLED + OWLs |
| Connectivity | BLE 5.0, Wi-Fi |
| Designed in | EasyEDA |
| Manufactured | JLCPCB |

## Prototype v2 Changes

- Moved from single 18650 to dual parallel for ~2× runtime
- Improved charge circuit — upgraded to IP5306 power bank IC
- Reinforced LED pad footprints (v1 pads lifted during rework)
- Added status LED for charge/power indication
- Revised mounting points for enclosure fit

## Power Runtime Estimates

| Brightness | Current Draw | Runtime (2× 2500mAh) |
|-----------|--------------|----------------------|
| 100% (not recommended) | ~1.8A | ~2.8h |
| WLED 1A limit | ~1.0A | ~5h |
| 40% soft cap | ~0.5A | ~10h |

::: tip WLED current limit
Set WLED maximum current to `1000mA` for a good balance of brightness and runtime. See [Current Limit Config](./current-limit) for full details.
:::

## Enclosure

Prototype v2 uses a hand-formed wire armature with diffused silicone over the LED strip. Production enclosure design is TBD — candidates include vacuum-formed PETG and resin casting.
