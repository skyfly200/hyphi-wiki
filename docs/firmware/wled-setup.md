# WLED Setup

<StatusBadge type="stable" />

WLED is open-source firmware for addressable LEDs. Hyphi devices ship with WLED pre-flashed. This guide covers first-time setup and network configuration.

## First Boot

1. Power on the device
2. WLED creates a Wi-Fi access point: **`WLED-AP`** (password: `wled1234`)
3. Connect to `WLED-AP` from your phone or laptop
4. Browser opens automatically to `4.3.2.1` — if not, navigate there manually
5. You're in the WLED UI

## Connect to Your Wi-Fi

1. WLED UI → **Config** → **WiFi Setup**
2. Enter your network SSID and password
3. Click **Save & Connect**
4. Device reboots and joins your network
5. Find the IP via your router's DHCP table, or use the WLED app (iOS/Android)

::: tip mDNS
WLED supports mDNS. On most networks you can reach the device at `http://wled-XXXXXX.local` where `XXXXXX` is the last 6 chars of the MAC address.
:::

## WLED App

The official WLED app (iOS / Android) handles device discovery automatically on your local network:

- **iOS:** [WLED on App Store](https://apps.apple.com/app/wled/id1551473145)
- **Android:** [WLED on Play Store](https://play.google.com/store/apps/details?id=ca.cgutoski.wled)

## Initial LED Config

Before using effects, set the correct LED count for your device:

→ See [WLED Custom Config](./wled-config) for the full LED preferences walkthrough.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `WLED-AP` not appearing | Hold BOOT button 5s to reset Wi-Fi config |
| LEDs all wrong color | Check RGB order setting (GRB is most common for WS2812B) |
| LEDs flickering | Check power supply, add decoupling cap — see [Current Limit](../gloflora/current-limit) |
| Can't reach `4.3.2.1` | Disable mobile data, connect only to `WLED-AP` |
