# Flashing Guide

<StatusBadge type="stable" />

How to flash WLED onto GlowFlora home devices, or custom BLE firmware onto wearable and flow-line devices.

## Method 1 — WLED Web Installer (Easiest)

For flashing stock WLED only, no toolchain needed:

1. Open **Chrome or Edge** (Web Serial required — not Firefox/Safari)
2. Go to [install.wled.me](https://install.wled.me)
3. Connect device via USB-C
4. Click **Install** and select your port
5. Follow the on-screen steps

::: tip Xiao boot mode
If the device isn't detected, hold the **BOOT** button while plugging in USB to force bootloader mode.
:::

## Method 2 — esptool (Command Line)

For flashing pre-built `.bin` firmware files:

```bash
# Install esptool
pip install esptool

# Erase flash first (clean slate)
esptool.py --chip esp32c3 --port /dev/ttyUSB0 erase_flash

# Flash WLED
esptool.py --chip esp32c3 --port /dev/ttyUSB0 \
  --baud 460800 write_flash \
  --flash_mode dio --flash_freq 80m \
  0x0 bootloader.bin \
  0x8000 partitions.bin \
  0xe000 boot_app0.bin \
  0x10000 firmware.bin
```

**Port examples:**
- macOS: `/dev/cu.usbmodem*` or `/dev/cu.SLAB_USBtoUART`
- Linux: `/dev/ttyUSB0` or `/dev/ttyACM0`
- Windows: `COM3` (check Device Manager)

## Method 3 — Arduino IDE / PlatformIO

For building and flashing BLE device firmware from source:

**Arduino IDE:**
1. Install ESP32 board support: Preferences → Additional Boards URL:
   `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
2. Board Manager → Install **esp32 by Espressif**
3. Select board: **XIAO_ESP32C3** (Clip) or **XIAO_ESP32S3** (Home)
4. Select port and click Upload

**PlatformIO:**
```ini
; platformio.ini
[env:xiao_esp32c3]
platform = espressif32
board = seeed_xiao_esp32c3
framework = arduino
monitor_speed = 115200
```

## Partition Scheme

WLED requires a custom partition scheme for OTA support. Use the **Minimal SPIFFS (1.9MB APP / 190KB SPIFFS)** partition scheme in Arduino IDE.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `No serial port found` | Install CH343/CP210x drivers, check cable supports data |
| `Failed to connect` | Hold BOOT during plugin, reduce baud to `115200` |
| `Wrong boot mode` | Erase flash completely before re-flashing |
| Stuck at upload % | Try a different USB cable (many are charge-only) |
