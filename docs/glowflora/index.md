# GlowFlora Hardware

<StatusBadge type="hardware" /> <StatusBadge type="wip" />

GlowFlora is Hyphi's flagship LED art product line — organic LED blooms designed for festival environments, flow arts, and living spaces.

## Product Line

| Product | MCU | Power | Status |
|---------|-----|-------|--------|
| [GlowFlora Clip](./clip) | — | Coin cell (CR2032) | ✅ Available |
| [GlowFlora Home](./home) | ESP32 (Xiao S3) | 18650 × 1 | V1.0 — Coming soon |
| [GlowFlora Go](./go) | ESP32 | Battery pack | Early prototype — custom firmware |

## Shared Architecture

Home and Go share:
- **ESP32** as the main MCU (Wi-Fi + BLE, Arduino-compatible)
- **WLED** firmware out of the box
- **WS2812B** addressable LEDs
- **OWLS** BLE protocol for app control
- **JLCPCB** manufactured PCBs

## Key Design Decisions

### Xiao vs Embedded Module
Home and Go use Seeed Xiao ESP32 dev boards for prototyping speed. Production revisions will evaluate embedded ESP32 modules for cleaner USB implementation and lower BOM cost at scale.

### Current Limiting
All products implement hardware current limiting to protect LEDs and battery. See the [Current Limit Config](../diy/current-limit) page for resistor calculations and configuration.

## Links

- [GlowFlora Clip →](./clip)
- [GlowFlora Home →](./home)
- [GlowFlora Go →](./go)
