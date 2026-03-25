# Glow Flora Hardware

<StatusBadge type="hardware" /> <StatusBadge type="wip" />

Glow Flora is Hyphi's flagship LED art product line — organic LED blooms designed for festival environments, flow arts, and living spaces.

## Product Line

| Product | MCU | Power | Status |
|---------|-----|-------|--------|
| [Glow Flora Clip](./clip) | ESP32 | USB-C / LiPo | Near production |
| [Glow Flora Home](./home) | ESP32 | 18650 × 2 | Prototype v2 |

## Shared Architecture

Both products share:
- **ESP32** as the main MCU (Wi-Fi + BLE, Arduino-compatible)
- **WLED** firmware out of the box
- **WS2812B** addressable LEDs
- **OWLS** BLE protocol for app control
- **JLCPCB** manufactured PCBs

## Key Design Decisions

### Xiao vs Embedded Module
Both current products use Seeed Xiao ESP32 dev boards for prototyping speed. Production revisions will evaluate embedded ESP32 modules for cleaner USB implementation and lower BOM cost at scale.

### Current Limiting
Both products implement hardware current limiting to protect LEDs and battery. See the [Current Limit Config](./current-limit) page for resistor calculations and configuration.

## Links

- [Glow Flora Clip →](./clip)
- [Glow Flora Home →](./home)
- [Schematic & BOM →](./bom)
- [Current Limit Config →](./current-limit)
- [PCB Fabrication →](./pcb)
