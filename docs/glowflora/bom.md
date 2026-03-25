# Schematic & BOM

<StatusBadge type="wip" />

Full schematics and bills of materials for Glowflora Clip and Glowflora Home.

::: tip Files coming soon
EasyEDA project exports (schematic PDF, BOM CSV, Gerbers) will be linked here once prototype v2 is validated. In the meantime, the key components are listed below.
:::

## Glowflora Clip — Key Components

| Ref | Part | Value / PN | Source |
|-----|------|-----------|--------|
| U1 | MCU | Seeed Xiao ESP32-C3 | Seeed / AliExpress |
| U2 | Charger | TP4056 w/ protection | AliExpress |
| LED1–12 | Addressable LED | WS2812B 5050 | AliExpress |
| R1 | Data resistor | 330Ω 0402 | JLCPCB Parts |
| C1 | Decoupling cap | 100μF 10V electrolytic | JLCPCB Parts |
| BT1 | Battery | 402030 LiPo ~150mAh | AliExpress |
| SW1 | Tactile switch | 3×4mm SMD | JLCPCB Parts |

## Glowflora Home — Key Components

| Ref | Part | Value / PN | Source |
|-----|------|-----------|--------|
| U1 | MCU | Seeed Xiao ESP32-S3 | Seeed / AliExpress |
| U2 | Power bank IC | IP5306 | AliExpress |
| LED1–30 | Addressable LED | WS2812B 5050 | AliExpress |
| R1 | Data resistor | 330Ω 0402 | JLCPCB Parts |
| C1 | Decoupling cap | 470μF 10V electrolytic | JLCPCB Parts |
| BT1–2 | Battery | 18650 2500mAh (×2) | AliExpress |
| SW1 | Power switch | SPDT slide | JLCPCB Parts |
| J1 | Charge port | USB-C 16P | JLCPCB Parts |
