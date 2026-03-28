# OWLS Protocol

<StatusBadge type="wip" /> <StatusBadge type="hardware" label="BLE" />

**Open Wireless Lighting Standard** — a BLE mesh protocol designed to unify all Hyphi devices under a single, open specification. OWLS lets any compatible device discover, sync, and control other devices on the same mesh without a central hub.

## Goals

- **Device-agnostic** — any MCU with BLE (ESP32, Nordic nRF52xx, etc.) can implement OWLS
- **Hub-free** — mesh topology, no single point of failure
- **Open** — fully documented, free to implement
- **Composable** — devices expose capability services; apps consume what they understand

## Status

| Component | Status |
|-----------|--------|
| BLE service UUIDs | Documented |
| Characteristic UUIDs | Documented |
| Characteristic formats | Documented |
| Metadata service | Documented |
| Device discovery (NFC/QR) | Documented |
| Mesh topology spec | Draft |
| Reference firmware | In progress |
| Companion app SDK | Planned |

## Quick Reference — Services

<UuidTable :rows="[
  { name: 'LED Control',     uuid: 'f82d2279-9f54-4851-8394-377d54fb99bb', desc: 'Power, mode, brightness, color, speed, cycle' },
  { name: 'Metadata',        uuid: 'ff391b43-ea80-456a-add4-eb9091a69163', desc: 'Device name, version, capabilities' },
  { name: 'Battery',         uuid: '0x180F', desc: 'Standard BLE battery service' },
  { name: 'Device Info',     uuid: '0x180A', desc: 'Standard device information service' },
  { name: 'Current Time',    uuid: '0x1805', desc: 'Time sync for scheduled effects' },
  { name: 'Env Sensing',     uuid: '0x181A', desc: 'Temperature, audio reactive data' },
]" />

## Next Steps

- [Architecture →](./architecture)
- [Full BLE Services & UUIDs →](./ble-services)
- [Characteristic Formats →](./wire-formats)
- [Mesh Topology →](./mesh)
