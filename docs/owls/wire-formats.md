# Wire Formats

<StatusBadge type="stable" />

Detailed encoding specifications for every OWLS characteristic.

## Primitive Types

| Type | Size | Encoding |
|------|------|----------|
| `BLEByte` | 1 byte | Unsigned 8-bit integer |
| `8-byte char` | 8 bytes | UTF-8 ASCII string, right-padded with null bytes |
| `uint32 LE` | 4 bytes | Little-endian unsigned 32-bit integer |
| `int16` | 2 bytes | Signed 16-bit integer, little-endian |

## Color

```
FF6B35\0\0
^-----^    6 ASCII hex chars (uppercase), RGB
      ^^   2 null padding bytes
```

Always uppercase. The trailing two bytes pad to the 8-byte char format.

## Speed

```
[0x58, 0x02, 0x00, 0x00]  →  600 ms
```

uint32 little-endian, value in **milliseconds** per segment cycle.

## Cycle Time

```
"15\0\0\0\0\0\0"
```

ASCII decimal string representing seconds as an integer. Padded to 8 bytes.

## Thresholds

Three separate threshold characteristics, all using the same encoding:

```
"1.5000\0\0"
```

ASCII float string, 4 decimal places, padded to 8 bytes. Applied as:

| Characteristic | Purpose |
|----------------|---------|
| Rel Threshold | Relative change trigger — reacts to sudden sound spikes |
| Off Threshold | Silence threshold — below this level is treated as off |
| Static Threshold | Absolute level trigger |

## Current Time (0x1805)

10-byte format matching the BLE Current Time Service spec:

| Byte(s) | Field | Notes |
|---------|-------|-------|
| 0–1 | Year | uint16 LE |
| 2 | Month | 1–12 |
| 3 | Day | 1–31 |
| 4 | Hour | 0–23 |
| 5 | Minute | 0–59 |
| 6 | Second | 0–59 |
| 7 | Day of Week | 1=Mon, 7=Sun (ISO) |
| 8 | Fractions256 | 1/256 second fractions |
| 9 | Adjust Reason | Bitmask per BLE spec, typically `0` |

::: warning Endianness
Only the Year field is multi-byte and uses little-endian encoding. All other fields are single bytes.
:::

## Metadata JSON Formats

Each Metadata characteristic carries a JSON string. Fields are optional — absent keys mean the capability is not present.

### Power (`META_POWER`)
```json
{ "type": "lipo", "cap": 2000, "io": "usbc", "v": 3.7 }
```
| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Battery chemistry: `"lipo"`, `"li-ion"`, `"usb"` |
| `cap` | number | Capacity in mAh |
| `io` | string | Charging connector: `"usbc"`, `"microusb"` |
| `v` | number | Nominal voltage |

### Lights (`META_LIGHTS`)
```json
{ "qty": 30, "type": "ws2812b", "pin": 5 }
```
| Field | Type | Description |
|-------|------|-------------|
| `qty` | number | Number of LEDs |
| `type` | string | LED chipset: `"ws2812b"`, `"sk6812"`, etc. |
| `pin` | number | Data pin number |

### Audio (`META_AUDIO`)
```json
{ "type": "analog", "fft": 512 }
```
| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Microphone type: `"analog"`, `"i2s"` |
| `fft` | number | FFT bin count |

### Sensors (`META_SENSORS`)
```json
{ "audio": true, "mic": "max4466", "motion": false }
```

### Profile (`META_PROFILE`)
```json
{ "img": "https://…/thumb.png", "ui": "gloflora-clip", "theme": "#C060FF" }
```
| Field | Type | Description |
|-------|------|-------------|
| `img` | string | Thumbnail URL for device card |
| `ui` | string | UI layout hint for companion app |
| `theme` | string | Hex accent color |
