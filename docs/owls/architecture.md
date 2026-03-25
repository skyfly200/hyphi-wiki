# Architecture

<StatusBadge type="draft" />

OWLS is structured as a layered BLE protocol. This page describes the overall design philosophy and how the layers fit together.

## Layers

```
┌─────────────────────────────────┐
│        Application / App        │  ← Companion app, web BLE, automations
├─────────────────────────────────┤
│         OWLS Mesh Layer         │  ← Device discovery, group sync, scenes
├─────────────────────────────────┤
│      OWLS Service Layer         │  ← LED Control, Metadata, Env Sensing
├─────────────────────────────────┤
│     BLE GATT / Standard SIGs    │  ← Battery, Device Info, Current Time
├─────────────────────────────────┤
│    Hardware (ESP32 / nRF52x)    │
└─────────────────────────────────┘
```

## Device Roles

| Role | Description |
|------|-------------|
| **Node** | Any OWLS-capable device (Glow Flora, Smart Sprout, bare PCB) |
| **Controller** | A node that also coordinates group effects |
| **Bridge** | A node with Wi-Fi that bridges BLE mesh to network |

::: tip This page is a draft
Full architecture documentation is in progress. Check back as OWLS development continues.
:::
