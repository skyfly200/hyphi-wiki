---
layout: home
title: Hyphi Wiki

hero:
  name: Hyphi Wiki
  text: Guides and Documentation
  tagline: OWLS protocol spec, Glowflora hardware, firmware guides, and DIY builds — all in one place.
  image:
    src: /ColorLogo.svg
    alt: Hyphi
features:
  - icon:
      src: /images/wled-logo.png
    title: WLED Firmware
    details: Setup, custom config, and OTA updates for Glowflora Home devices running WLED. Covers LED count, current limiting, presets, and esptool flashing.
    link: /firmware/
    linkText: WLED docs

  - icon:
      src: /images/ble-icon.svg
    title: BLE Device Firmware
    details: Custom BLE firmware for wearable and flow-line devices — implements OWLS services for Hyphi Hub control over Bluetooth. No Wi-Fi or cloud required.
    link: /firmware/owls-fw
    linkText: BLE firmware docs

  - icon: 🔧
    title: DIY Build Guides
    details: Assembly guides for Glowflora Clip and Home — LED wiring, power hookup, soldering tips, and current limit resistor config.
    link: /diy/
    linkText: Start building

  - icon: 📡
    title: Hyphi Hub
    details: Open-source PWA for controlling OWLS devices over Web Bluetooth. No install, no cloud. Supports BLE scan, NFC tap, and QR pairing. iOS via Bluefy.
    link: /hub/
    linkText: Hub docs

  - icon: 🦉
    title: OWLS Protocol
    details: Open Wireless Lighting Standard — the open BLE mesh protocol powering Hyphi devices. Full service and UUID reference, characteristic formats, and mesh topology.
    link: /owls/
    linkText: Read the spec
---

<ProductsSection />

