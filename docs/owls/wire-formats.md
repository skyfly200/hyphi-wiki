# Characteristic Formats

<StatusBadge type="stable" />

Detailed encoding for every OWLS characteristic. Verified against Smart Sprout V1.1 firmware.

## Primitive Types

| Type | Size | Encoding |
|------|------|----------|
| `BLEByte` | 1 byte | Unsigned 8-bit integer |
| `8-byte char` | 8 bytes | UTF-8 ASCII string, null-terminated, right-padded |
| `uint32 LE` | 4 bytes | Little-endian unsigned 32-bit integer |
| `int16` | 2 bytes | Signed 16-bit integer, little-endian |

---

## LED Control

### Color

```
"FF6B35\0\0"
 ^^^^^^      6 ASCII uppercase hex chars — RRGGBB
       ^^    2 null padding bytes (to fill 8-byte char)
```

Always uppercase. Parsed with `strtoul(buffer, NULL, 16)`.

### Speed

```
[0x58, 0x02, 0x00, 0x00]  →  600 ms
```

uint32 little-endian. Value in **milliseconds** per segment cycle. Read 4 bytes exactly.

### Cycle Toggle

BLEByte. `0` = auto-cycle off. Any non-zero value enables auto-cycling.

### Cycle Time

```
"10000\0\0\0"
```

ASCII decimal string in **milliseconds**. Parsed with `strtoul(buffer, NULL, 10)`. Default: `10000` (10 seconds).

::: warning Not seconds
The firmware stores and expects milliseconds. `10000` = 10 seconds. Sending `10` would give a 10ms cycle.
:::

---

## Audio Thresholds

All three threshold characteristics share the same encoding:

```
"3.0000\0\0"
```

ASCII float string, padded to 8 bytes. Parsed with `atof(buffer)`.

| Characteristic | Default | Applied as |
|----------------|---------|-----------|
| **Rel Threshold** | `3.0` | `dynamic = rollingAvg × relThreshold + offsetThreshold` |
| **Offset Threshold** | `0.0` | Fixed value added to the dynamic threshold |
| **Static Threshold** | `1000.0` | Absolute trigger level when Auto Threshold is off |

Audio triggers when `audio_level > threshold`. With Auto Threshold on, the threshold is computed dynamically from the rolling average.

---

## LED Current (Notify)

```
"240 mA\0\0"
```

ASCII string with a space and `mA` suffix, padded to 8 bytes. Estimated from LED intensity sum:

```
current (mA) = (intensitySum × 40µA / 1000) + (2mA × ledsEnabled)
```

The device automatically scales brightness down if current would exceed the configured maximum.

---

## Battery Level

uint8, 0–100%. Derived from cell voltage using a **sigmoid (logistic) function**:

```
percent = 100 / (1 + e^(-14 × (v - 3.7)))
```

This gives a more linear perceived charge curve than a simple linear map. Voltage is read via a resistor divider (R1 = 100kΩ, R2 = 82kΩ) on the ADC, averaged over 16 readings.

---

## Temperature

int16. Value = `ambient_celsius × 100`. Matches the BLE Environmental Sensing spec (unit: 0.01°C).

The firmware offsets the die temperature by −5°C to approximate ambient: `ambient = die_temp − 5.0`.

---

## Current Time (`0x2A2B`)

10-byte packed struct, matching the BLE Current Time Service spec:

| Byte(s) | Field | Notes |
|---------|-------|-------|
| 0–1 | Year | uint16 LE |
| 2 | Month | 1–12 |
| 3 | Day | 1–31 |
| 4 | Hour | 0–23 |
| 5 | Minute | 0–59 |
| 6 | Second | 0–59 |
| 7 | Day of Week | 1=Mon, 7=Sun (ISO 8601) |
| 8 | Fractions256 | 1/256 second fractions |
| 9 | Adjust Reason | Bitmask per BLE spec, typically `0` |

::: warning Endianness
Only Year is multi-byte (little-endian). All other fields are single bytes.
:::

---

## Metadata JSON Formats

Each Metadata characteristic carries a compact JSON string (max 128–256 bytes depending on characteristic). Keys are optional — absent keys mean the capability is not present.

### Index
```json
["power", "light", "audio", "sense", "profl"]
```
Read this first. It lists which metadata characteristics are populated on this device.

### Power (`META_POWER`)
```json
{ "type": "LiPo", "cap": 2000, "io": "USB-C", "v": 5 }
```
| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Battery chemistry — e.g. `"LiPo"`, `"li-ion"` |
| `cap` | number | Capacity in mAh |
| `io` | string | Charging connector — e.g. `"USB-C"`, `"microusb"` |
| `v` | number | Charge voltage |

### Lights (`META_LIGHTS`)
```json
{ "qty": 60, "type": "WS2812B", "pin": 12 }
```
| Field | Type | Description |
|-------|------|-------------|
| `qty` | number | Number of LEDs |
| `type` | string | LED chipset — e.g. `"WS2812B"`, `"SK6812"` |
| `pin` | number | Data pin number |

### Audio (`META_AUDIO`)
```json
{ "type": "PDM", "fft": 128 }
```
| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Microphone interface — `"PDM"`, `"I2S"`, `"analog"` |
| `fft` | number | FFT bin count used for analysis |

### Sensors (`META_SENSORS`)
```json
{ "audio": true, "mic": "PDM", "motion": false }
```

### Profile (`META_PROFILE`)
```json
{ "img": "bit.ly/sprout-v1", "ui": "classic", "theme": "#2E7D32", "meta": "https://raw.githubusercontent.com/skyfly200/hyphi-hub/main/public/devices/smart-sprout-v1.1.json" }
```
| Field | Type | Description |
|-------|------|-------------|
| `img` | string | Thumbnail URL for device card in app |
| `ui` | string | UI layout hint — `"classic"`, `"glowflora-clip"`, etc. |
| `theme` | string | Hex accent color for device card |
| `meta` | string | URL to full hosted device profile JSON (optional) |

When `meta` is present, the app fetches the full device profile on first connect and caches it. This allows richer UI data (LED maps, audio viz presets, docs links) without hitting the 256-byte BLE characteristic limit. See [Device Profiles →](../hub/device-profiles)
