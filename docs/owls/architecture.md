# Architecture

<StatusBadge type="draft" />

OWLS is structured as a layered BLE GATT protocol. This page describes the overall design and how the layers fit together.

## Protocol Stack

```
┌─────────────────────────────────┐
│        Application / App        │  ← Hyphi Hub PWA, custom apps, automations
├─────────────────────────────────┤
│         OWLS Mesh Layer         │  ← Device discovery, group sync, scenes
├─────────────────────────────────┤
│      OWLS Service Layer         │  ← LED Control, Metadata, Audio, Env Sensing
├─────────────────────────────────┤
│     BLE GATT / Standard SIGs    │  ← Battery (0x180F), Device Info (0x180A),
│                                 │    Current Time (0x1805), Env Sensing (0x181A)
├─────────────────────────────────┤
│    Hardware (Artemis / ESP32)   │
└─────────────────────────────────┘
```

## Device Roles

| Role | Description |
|------|-------------|
| **Node** | Any OWLS-capable device — GlowFlora, Smart Sprout, bare MCU |
| **Controller** | A node that also coordinates group effects and scene sync |
| **Bridge** | A node with Wi-Fi that bridges BLE mesh to the local network |

## Supported Hardware

OWLS is MCU-agnostic. Any platform with BLE and enough RAM for the GATT table can implement it.

| Platform | Status | Notes |
|----------|--------|-------|
| SparkFun Artemis Nano (Apollo3) | ✅ In use | Smart Sprout V1.1 — ArduinoBLE, PDM mic, SPI DMA LEDs |
| Seeed Xiao ESP32-C3 | ✅ In use | GlowFlora Clip — WLED + OWLS |
| Seeed Xiao ESP32-S3 | ✅ In use | GlowFlora Home V1.0 — WLED + OWLS |
| Nordic nRF52x | Planned | Target for future wearable hardware |

## Reference Implementation — Smart Sprout V1.1

The Smart Sprout V1.1 (Artemis Nano) is the reference OWLS firmware implementation.

**Key implementation details:**
- **BLE stack:** ArduinoBLE
- **LED driver:** WS2812FX via SPI DMA — 4-bit SPI expansion at 3.2 MHz to emulate 800 kHz WS2812B signal
- **Audio:** PDM microphone → 4096-sample FFT (ARM CMSIS DSP) → rolling average energy → threshold trigger
- **Battery:** 16-sample averaged ADC → resistor divider → sigmoid voltage-to-percent curve
- **Time:** RTC synced via Current Time Service write from app

**Advertised services** (in order):
1. Device Info (`0x180A`)
2. Current Time (`0x1805`)
3. Battery (`0x180F`)
4. Environmental Sensing (`0x181A`)
5. LED Control (`f82d2279-...`)

Metadata service is added but **not advertised** — it is discovered after connect.

## Connection Flow

```
App                                    Device
 │                                        │
 ├──── BLE Scan ─────────────────────────►│  filters by LED Control service UUID
 │◄─── Advertisement ─────────────────────┤
 │                                        │
 ├──── Connect ──────────────────────────►│
 │◄─── GATT discovery ────────────────────┤
 │                                        │
 ├──── Read Metadata Index ──────────────►│
 │◄─── ["power","light","audio",...] ──────┤
 │                                        │
 ├──── Read each Metadata char ──────────►│  build device profile
 │◄─── JSON strings ───────────────────────┤
 │                                        │
 ├──── Subscribe: Battery, Temp, Current ►│
 │◄─── Notify updates ─────────────────────┤  live telemetry
 │                                        │
 ├──── Write: LED Power, Mode, Color... ──►│  control
```

## Key Design Decisions

### Metadata-First Discovery
Devices expose capabilities as JSON strings rather than fixed schemas. The app reads the Index characteristic to know which sections exist before rendering any UI. This allows heterogeneous devices (different LED counts, mic types, power configs) to work with the same app without firmware-specific code paths.

### Standard SIG Services
Battery, Device Info, Current Time, and Environmental Sensing use standard BLE SIG UUIDs. This means any generic BLE tool (nRF Connect, LightBlue, etc.) can read them without OWLS-specific knowledge.

### No Pairing Required
OWLS does not require BLE pairing or bonding. Connections are open — security is handled at the application layer if needed. This enables instant tap-to-connect via NFC/QR without PIN entry.

::: tip This page is a draft
Mesh layer, group sync, and scene specifications are under active design.
:::
