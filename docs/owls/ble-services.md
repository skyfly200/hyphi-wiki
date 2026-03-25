# BLE Services & UUIDs

<StatusBadge type="stable" />

Full UUID reference for all OWLS BLE services and characteristics.

## LED Control Service

**Service UUID:** `f82d2279-9f54-4851-8394-377d54fb99bb`

| Characteristic | UUID | Type | Description |
|----------------|------|------|-------------|
| LED Power | `fd5897ee-c402-4260-a6dc-f3d7b109d724` | BLEByte | `0` = off, `1` = on |
| LED Mode | `a96427ff-5f18-4a83-be0a-0a9a5ab91f13` | BLEByte | WS2812FX mode index (0–255) |
| Brightness | `74c294a1-a211-4ac5-adfa-18b574f26239` | BLEByte | `0–255` |
| Color | `ce634504-106b-4ce3-b29e-de0de1591b8f` | 8-byte char | 6-char uppercase hex string, e.g. `FF6B35` |
| Speed | `4ff03862-869e-4a77-aeb7-cda7eff0ea61` | 8-byte char | uint32 little-endian, milliseconds per segment |
| Cycle | `d0c28dc7-cede-4b8c-a71c-ade915afa38f` | BLEByte | `0` = off, `1` = on |
| Cycle Time | `56d73e7f-9dcc-408f-bcad-68a763d8f6f0` | 8-byte char | ASCII decimal string, e.g. `15` (seconds) |
| LED Current | `44c9c81f-5293-4911-9eb1-d0f2a18a04c6` | 8-byte char | `BLERead \| BLENotify`, ASCII decimal mA |
| Audio Reactive | `2264ea6f-d67b-45ac-8b95-5ee3f4a9c57e` | BLEByte | `0` = off, `1` = on |
| Auto Threshold | `f752b4c4-8ea8-4461-8935-10df5467ef25` | BLEByte | `0` = off, `1` = on |
| Rel Threshold | `db034f32-31d8-4c83-b768-a32d0ef04b32` | 8-byte char | ASCII float string, e.g. `1.5000` |
| Off Threshold | `d72345e3-e7bb-4e1e-a121-970cd44a6768` | 8-byte char | ASCII float string |
| Static Threshold | `e0975faf-6888-4a83-b148-a7132b877627` | 8-byte char | ASCII float string |
| Audio Damping | `5aeae22f-bbef-4b06-b54a-7e95eedc12d4` | BLEByte | `0–255` |
| Button Advance | `cc07600f-11a3-4e5a-bc42-88f52aeddc68` | BLEByte | Write `1` to advance to next mode |

## Metadata Service

**Service UUID:** `ff391b43-ea80-456a-add4-eb9091a69163`

Exposes device identity and capability flags as JSON strings. Read-only from the client perspective.

| Characteristic | UUID | Description |
|----------------|------|-------------|
| Index | `6b76ea09-a6e5-4163-b68b-334dcee19e78` | Array of capability keys present on this device |
| Power | `dc54c9a7-2ec7-40d1-bfae-44b0188e72e8` | `{ type, cap, io, v }` — power supply info |
| Lights | `e5dff126-6106-4744-94e5-85b577e66f77` | `{ qty, type, pin }` — LED strip config |
| Audio | `1162e818-a062-426f-ac23-a53173b1b6cf` | `{ type, fft }` — audio hardware info |
| Sensors | `95fdc978-217e-45d2-bc4d-95d8320617f9` | `{ audio, mic, motion }` — sensor capabilities |
| Profile | `0aaa858d-a11b-4de0-bae6-323db9d0ae16` | `{ img, ui, theme }` — display/UI hints |

## Standard Services

These use standard Bluetooth SIG service and characteristic UUIDs.

| Service | Service UUID | Characteristic | Char UUID |
|---------|-------------|----------------|-----------|
| Battery | `0000180f-0000-1000-8000-00805f9b34fb` | Battery Level | `00002a19-0000-1000-8000-00805f9b34fb` |
| Device Info | `0000180a-0000-1000-8000-00805f9b34fb` | Manufacturer | `00002a29-0000-1000-8000-00805f9b34fb` |
| Device Info | `0000180a-0000-1000-8000-00805f9b34fb` | Model | `00002a24-0000-1000-8000-00805f9b34fb` |
| Device Info | `0000180a-0000-1000-8000-00805f9b34fb` | Firmware Version | `00002a26-0000-1000-8000-00805f9b34fb` |
| Current Time | `00001805-0000-1000-8000-00805f9b34fb` | Current Time | `00002a2b-0000-1000-8000-00805f9b34fb` |
| Env Sensing | `0000181a-0000-1000-8000-00805f9b34fb` | Temperature | `00002a6e-0000-1000-8000-00805f9b34fb` |

## Notifications (Device → App)

These characteristics push updates to subscribed clients. All three also support `BLERead` — poll once on connect, then subscribe for live updates.

| Characteristic | UUID | Format | Notes |
|---------------|------|--------|-------|
| Battery Level | `00002a19-0000-1000-8000-00805f9b34fb` | uint8 | Percent, 0–100 |
| Temperature | `00002a6e-0000-1000-8000-00805f9b34fb` | int16 | Units of 0.01°C |
| LED Current | `44c9c81f-5293-4911-9eb1-d0f2a18a04c6` | 8-byte ASCII | Decimal mA reading |
