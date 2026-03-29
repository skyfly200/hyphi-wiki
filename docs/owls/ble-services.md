# BLE Services & UUIDs

<StatusBadge type="stable" />

Full UUID reference for all OWLS BLE services and characteristics. Verified against Smart Sprout V1.1 firmware (`ble.h`).

## LED Control Service

**Service UUID:** `f82d2279-9f54-4851-8394-377d54fb99bb`

| Characteristic | UUID | Props | Format | Description |
|----------------|------|-------|--------|-------------|
| LED Power | `fd5897ee-c402-4260-a6dc-f3d7b109d724` | R/W | BLEByte | `0` = off, `1` = on |
| LED Mode | `a96427ff-5f18-4a83-be0a-0a9a5ab91f13` | R/W | BLEByte | WS2812FX mode index (0–255) |
| Brightness | `74c294a1-a211-4ac5-adfa-18b574f26239` | R/W | BLEByte | `0–255` |
| Color | `ce634504-106b-4ce3-b29e-de0de1591b8f` | R/W | 8-byte char | 6 uppercase hex chars, e.g. `FF6B35` |
| Speed | `4ff03862-869e-4a77-aeb7-cda7eff0ea61` | R/W | 4-byte uint32 LE | Milliseconds per segment cycle |
| Cycle | `d0c28dc7-cede-4b8c-a71c-ade915afa38f` | R/W | BLEByte | `0` = auto-cycle off, `>0` = on |
| Cycle Time | `56d73e7f-9dcc-408f-bcad-68a763d8f6f0` | R/W | 8-byte char | ASCII decimal **milliseconds**, e.g. `10000` |
| LED Current | `44c9c81f-5293-4911-9eb1-d0f2a18a04c6` | R/Notify | 8-byte char | Estimated draw — e.g. `240 mA` |
| Audio Reactive | `2264ea6f-d67b-45ac-8b95-5ee3f4a9c57e` | R/W | BLEByte | `0` = off, `>0` = on |
| Auto Threshold | `f752b4c4-8ea8-4461-8935-10df5467ef25` | R/W | BLEByte | `0` = use static threshold, `>0` = use dynamic |
| Rel Threshold | `db034f32-31d8-4c83-b768-a32d0ef04b32` | R/W | 8-byte char | ASCII float — scalar on rolling avg, e.g. `3.0` |
| Offset Threshold | `d72345e3-e7bb-4e1e-a121-970cd44a6768` | R/W | 8-byte char | ASCII float — fixed offset added to dynamic threshold |
| Static Threshold | `e0975faf-6888-4a83-b148-a7132b877627` | R/W | 8-byte char | ASCII float — absolute trigger level when auto threshold is off |
| Audio Damping | `5aeae22f-bbef-4b06-b54a-7e95eedc12d4` | R/W | BLEByte | Min ms between audio triggers |
| Button Advance | `cc07600f-11a3-4e5a-bc42-88f52aeddc68` | R/W | BLEByte | `0` = disable physical button mode cycling, `>0` = enable |

::: warning Cycle Time is milliseconds
`10000` = 10 seconds. The firmware parses with `strtoul` — send milliseconds, not seconds.
:::

::: tip Button Advance
Toggles whether the **physical button** cycles through LED modes. Does **not** trigger a mode advance via BLE — it is a configuration flag for the hardware button.
:::

## Metadata Service

**Service UUID:** `ff391b43-ea80-456a-add4-eb9091a69163`

Read-only JSON strings exposing device identity and capability flags. Read all on connect to build the device profile before presenting UI.

| Characteristic | UUID | Description |
|----------------|------|-------------|
| Index | `6b76ea09-a6e5-4163-b68b-334dcee19e78` | Ordered array of capability keys present on this device |
| Power | `dc54c9a7-2ec7-40d1-bfae-44b0188e72e8` | `{ type, cap, io, v }` — power supply info |
| Lights | `e5dff126-6106-4744-94e5-85b577e66f77` | `{ qty, type, pin }` — LED strip config |
| Audio | `1162e818-a062-426f-ac23-a53173b1b6cf` | `{ type, fft }` — audio hardware info |
| Sensors | `95fdc978-217e-45d2-bc4d-95d8320617f9` | `{ audio, mic, motion }` — sensor capabilities |
| Profile | `0aaa858d-a11b-4de0-bae6-323db9d0ae16` | `{ img, ui, theme }` — display/UI hints for app |

Read the Index characteristic first — it tells the app which capability sections are present:
```json
["power", "light", "audio", "sense", "profl"]
```

## Standard BLE Services

| Service | UUID | Characteristic | Char UUID | Properties |
|---------|------|----------------|-----------|-----------|
| Battery | `0x180F` | Battery Level | `0x2A19` | R/Notify — uint8, 0–100% |
| Device Info | `0x180A` | Manufacturer | `0x2A29` | R — string |
| Device Info | `0x180A` | Model | `0x2A24` | R — string |
| Device Info | `0x180A` | Firmware Version | `0x2A26` | R — string |
| Current Time | `0x1805` | Current Time | `0x2A2B` | R/W — 10-byte packed struct |
| Env Sensing | `0x181A` | Temperature | `0x2A6E` | R/Notify — int16, units of 0.01°C |

## Notify Characteristics

Subscribe after connecting for live updates pushed from device to app:

| Characteristic | UUID | Format | Notes |
|---------------|------|--------|-------|
| Battery Level | `0x2A19` | uint8 | 0–100%, derived from sigmoid voltage curve |
| Temperature | `0x2A6E` | int16 | `ambient_celsius × 100` (die temp minus 5°C offset) |
| LED Current | `44c9c81f-...` | ASCII string | Estimated draw, e.g. `240 mA` |
