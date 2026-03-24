# BLE Services & UUIDs

<StatusBadge type="stable" />

Full UUID reference for all OWLs BLE services and characteristics.

## LED Control Service

**Service UUID:** `f82d2279-9f54-4851-8394-377d54fb99bb`

<WireFormat :rows="[
  { char: 'LED Power',      type: 'BLEByte',     desc: '<code>0</code> = off, <code>1</code> = on' },
  { char: 'LED Mode',       type: 'BLEByte',     desc: 'WS2812FX mode index (0–255)' },
  { char: 'Brightness',     type: 'BLEByte',     desc: '<code>0–255</code>' },
  { char: 'Color',          type: '8-byte char', desc: '6-char uppercase hex string, e.g. <code>FF6B35</code>' },
  { char: 'Speed',          type: '8-byte char', desc: 'uint32 little-endian, milliseconds per segment' },
  { char: 'Cycle',          type: 'BLEByte',     desc: '<code>0</code> = off, <code>1</code> = on' },
  { char: 'Cycle Time',     type: '8-byte char', desc: 'ASCII decimal string, e.g. <code>15</code> (seconds)' },
  { char: 'Audio Reactive', type: 'BLEByte',     desc: '<code>0</code> = off, <code>1</code> = on' },
  { char: 'Auto Threshold', type: 'BLEByte',     desc: '<code>0</code> = off, <code>1</code> = on' },
  { char: 'Threshold',      type: '8-byte char', desc: 'ASCII float string, e.g. <code>1.5000</code>' },
  { char: 'Audio Damping',  type: 'BLEByte',     desc: '<code>0–255</code>' },
]" />

## Metadata Service

**Service UUID:** `ff391b43-ea80-456a-add4-eb9091a69163`

Exposes device identity and capability flags. Read-only from client perspective.

## Standard Services

| Service | UUID | Notes |
|---------|------|-------|
| Battery Level | `0x180F` | `BLERead \| BLENotify`, uint8, percent |
| Device Info | `0x180A` | Manufacturer, model, firmware version |
| Current Time | `0x1805` | 10-byte format — see [Wire Formats](./wire-formats) |
| Env Sensing | `0x181A` | Temperature (int16, 0.01°C), LED current (ASCII mA) |

## Notifications (Device → App)

These characteristics push updates to subscribed clients:

| Characteristic | Format | Notes |
|---------------|--------|-------|
| Battery Level | uint8 | Percent, 0–100 |
| Temperature | int16 | Units of 0.01°C |
| LED Current | 8-byte ASCII | Decimal mA reading |

::: tip Read vs Notify
All three notification characteristics also support `BLERead` — poll once on connect, then subscribe for live updates.
:::
