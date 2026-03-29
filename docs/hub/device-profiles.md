# Device Profiles

<StatusBadge type="draft" />

Device profiles are hosted JSON files that extend the BLE metadata with richer information — LED maps, audio presets, docs links, and UI hints — without being constrained by the 256-byte BLE characteristic limit.

## Why Hosted Profiles?

OWLS BLE metadata is intentionally compact: each characteristic holds a JSON string of ≤256 bytes. That's enough for basic capability flags and power info, but not for:

- Per-LED position maps for visualization
- Audio effect presets
- Links to docs, firmware, or BOM
- Full device identity (SKU, hardware version, MCU)

Hosted profiles solve this by storing extended data in a static JSON file served over HTTPS. The firmware advertises the URL via the `meta` key in `META_PROFILE`. The app fetches it once on first connect and caches it locally.

## How It Works

```
Device (BLE)                         App
    │                                  │
    │  META_PROFILE characteristic     │
    │  { ..., "meta": "https://..." }  │
    │ ─────────────────────────────── ►│
    │                                  │  fetch profile URL
    │                                  ├──── GET /devices/smart-sprout-v1.1.json
    │                                  │◄─── { leds, audio, sensors, ... }
    │                                  │
    │                                  │  cache locally, build UI
```

The `meta` field in `META_PROFILE` is optional. Devices without it still work — the app falls back to the compact BLE metadata.

## Profile Schema

```json
{
  "id":             "smart-sprout-v1.1",
  "name":           "Smart Sprout",
  "sku":            "SPRT-V1-ARTEMIS",
  "hw_version":     "1.1",
  "mcu":            "SparkFun Artemis Nano (Apollo3)",
  "docs":           "https://wiki.hyphi.co/glowflora/sprout",
  "firmware_repo":  "https://github.com/skyfly200/SmartSprout",
  "theme":          "#4CAF50",
  "ui":             "classic",
  "img":            "/assets/smart_sprout-V1.jpg",

  "power": {
    "type": "LiPo",
    "cap": 2000,
    "io": "USB-C",
    "v": 5
  },

  "leds": {
    "qty": 60,
    "type": "WS2812B",
    "pin": 12,
    "map": [
      { "id": 0, "x": 50, "y": 95, "lbl": "Root" },
      { "id": 1, "x": 50, "y": 20, "lbl": "Top" }
    ],
    "groups": [
      { "name": "Stem", "ids": [0, 1] }
    ]
  },

  "audio": {
    "type": "PDM",
    "fft": 4096,
    "viz": [
      { "id": 0, "name": "Pulse" },
      { "id": 1, "name": "Spectrum" }
    ]
  },

  "sensors": {
    "audio": true,
    "mic": "PDM",
    "motion": false,
    "temp": true,
    "battery": true
  }
}
```

### Field Reference

**Top-level**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique device identifier — `"{product}-v{major}.{minor}"` |
| `name` | string | Human-readable display name |
| `sku` | string | Product SKU |
| `hw_version` | string | Hardware revision |
| `mcu` | string | MCU / platform description |
| `docs` | string | Link to wiki page for this device |
| `firmware_repo` | string | GitHub repo for firmware |
| `theme` | string | Hex accent color for device card in app |
| `ui` | string | UI layout hint — `"classic"`, `"glowflora-clip"`, `"glowflora-home"` |
| `img` | string | Thumbnail image URL for device card |

**`power`**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Battery chemistry — `"LiPo"`, `"li-ion"` |
| `cap` | number | Capacity in mAh |
| `io` | string | Charging connector — `"USB-C"`, `"microusb"` |
| `v` | number | Charge voltage |

**`leds`**

| Field | Type | Description |
|-------|------|-------------|
| `qty` | number | Total LED count |
| `type` | string | LED chipset — `"WS2812B"`, `"SK6812"` |
| `pin` | number | Data pin number (if applicable) |
| `map` | array | Per-LED positions for visualization — `{ id, x, y, lbl }` — `x`/`y` are 0–100 percentages |
| `groups` | array | Named LED groups — `{ name, ids[] }` |

**`audio`**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Mic interface — `"PDM"`, `"I2S"`, `"analog"` |
| `fft` | number | FFT sample count |
| `viz` | array | Audio visualizer presets — `{ id, name }` |

**`sensors`**

| Field | Type | Description |
|-------|------|-------------|
| `audio` | boolean | Has audio input |
| `mic` | string | Microphone type |
| `motion` | boolean | Has motion sensor |
| `temp` | boolean | Has temperature sensor |
| `battery` | boolean | Has battery monitoring |

## Hosted Profiles

Official device profiles are hosted in the `hyphi-hub` repository and served as static files:

| Device | Profile URL |
|--------|-------------|
| Smart Sprout V1.1 | [`/devices/smart-sprout-v1.1.json`](https://raw.githubusercontent.com/skyfly200/hyphi-hub/main/public/devices/smart-sprout-v1.1.json) |
| Glowflora Clip V1 | [`/devices/glowflora-clip-v1.json`](https://raw.githubusercontent.com/skyfly200/hyphi-hub/main/public/devices/glowflora-clip-v1.json) |
| Glowflora Home V1 | [`/devices/glowflora-home-v1.json`](https://raw.githubusercontent.com/skyfly200/hyphi-hub/main/public/devices/glowflora-home-v1.json) |

Profiles live in [`public/devices/`](https://github.com/skyfly200/hyphi-hub/tree/main/public/devices) in the hyphi-hub repo.

## Adding a Profile to Firmware

In the firmware's `META_PROFILE` JSON string, add a `meta` key with the profile URL. Keep the full string under 256 bytes — use the raw GitHub URL or a short URL.

**Example (Arduino, Smart Sprout V1.1):**
```cpp
metaProfile.writeValue(
  "{\"img\":\"bit.ly/sprout-v1\",\"ui\":\"classic\",\"theme\":\"#2E7D32\","
  "\"meta\":\"https://raw.githubusercontent.com/skyfly200/hyphi-hub/main/public/devices/smart-sprout-v1.1.json\"}"
);
```

::: tip Keep it short
The `META_PROFILE` characteristic holds up to 256 bytes. The `meta` URL + other fields must fit within that limit. Use a URL shortener if needed.
:::

## Creating a Profile for a New Device

1. Copy an existing profile from `public/devices/` as a starting point.
2. Update all fields — `id`, `name`, `sku`, `hw_version`, `mcu`, `leds`, `audio`, `sensors`.
3. Add it to `public/devices/` in the `hyphi-hub` repo.
4. Reference the raw URL from the firmware's `META_PROFILE` characteristic.
5. Add it to the table above.
