# Glowflora Home

<StatusBadge type="hardware" /> <StatusBadge type="wip" label="V1.0 — Prototype v3" />

Glowflora Home is a larger LED art piece designed for living spaces, camp setups, and festival installations. Runs on dual 18650 cells for extended battery life.

## Specs

| | |
|-|-|
| MCU | Seeed Xiao ESP32-S3 |
| LEDs | 30× WS2812B |
| Power | 2× 18650 in parallel, USB-C charge |
| Firmware | WLED + OWLS |
| Connectivity | BLE 5.0, Wi-Fi |
| Designed in | EasyEDA |
| Manufactured | JLCPCB |

## V1.0 — Prototype v3 Changes

- Finalized dual 18650 parallel power configuration
- Upgraded charge circuit to IP5306 power bank IC
- Reinforced LED pad footprints (earlier pads lifted during rework)
- Added status LED for charge/power indication
- Revised mounting points for enclosure fit
- Design locked as **V1.0** — first release candidate

## Revision History

| Version | Label | Notes |
|---------|-------|-------|
| Prototype v1 | — | Initial concept, single 18650 |
| Prototype v2 | — | Dual 18650, upgraded charge IC, reinforced pads |
| Prototype v3 | **V1.0** | Finalized design, current release candidate |

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

V1.0 uses a hand-formed wire armature with diffused silicone over the LED strip. Production enclosure design is TBD — candidates include vacuum-formed PETG and resin casting.
