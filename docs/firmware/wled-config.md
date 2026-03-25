# WLED Custom Config

<StatusBadge type="stable" />

Glowflora-specific WLED settings for correct LED count, current limiting, and performance.

## LED Preferences

**WLED UI → Config → LED Preferences**

### Glowflora Clip

| Setting | Value |
|---------|-------|
| LED count | `12` |
| LED type | `WS281x` |
| Color order | `GRB` |
| GPIO | `2` (Xiao default data pin) |
| Maximum brightness | `200` |
| Maximum current | `400` mA |

### Glowflora Home

| Setting | Value |
|---------|-------|
| LED count | `30` |
| LED type | `WS281x` |
| Color order | `GRB` |
| GPIO | `2` (Xiao default data pin) |
| Maximum brightness | `200` |
| Maximum current | `1000` mA |

::: warning Color order
Most WS2812B strips are **GRB** not RGB. If your colors are wrong (red looks green etc.), change the color order in LED Preferences.
:::

## Recommended Presets

Save these as WLED presets for quick access:

### Festival Mode
- Effect: **Palette** or **Colortwinkles**
- Brightness: 180
- Speed: 128
- Palette: **Forest** or **Party**

### Ambient Mode
- Effect: **Breathe** or **Flowing Hues**
- Brightness: 80
- Speed: 50

### Audio Reactive (requires microphone)
- Effect: **Ripple**
- Sync: enable **Audio Reactive**

## Sync & Groups

WLED supports **UDP sync** — multiple WLED devices on the same network can sync effects automatically:

1. **Config → Sync Interfaces → WLED Broadcast**
2. Set a sync group number (e.g. `1`)
3. Enable **Send** on the controller device
4. Enable **Receive** on follower devices

::: tip OWLS vs WLED sync
WLED UDP sync works over Wi-Fi only. OWLS BLE sync works without Wi-Fi — useful in festival settings with no network. See [OWLS Firmware](./owls-fw).
:::

## Backup & Restore

Export your full WLED config (presets, LED settings, network):

**Config → Security & Updates → Backup** → Download `cfg.json` + `presets.json`

Store these with your project files.
