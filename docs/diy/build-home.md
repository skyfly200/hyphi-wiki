# Build: Gloflora Home

<StatusBadge type="wip" />

Step-by-step assembly guide for the Gloflora Home from bare PCB.

::: tip Prerequisites
- Complete the [Gloflora Clip build](./build-clip) first — same skills, higher stakes
- 18650 batteries can deliver dangerous currents — handle with care
- Have the [BOM](../gloflora/bom) open for part reference
:::

## Overview

Estimated time: **4 hours** (experienced) / **6+ hours** (first build)

Build order:
1. Inspect bare PCB
2. Solder passives (R, C)
3. Solder IP5306 power bank IC
4. Solder Xiao ESP32-S3
5. Solder WS2812B LEDs (×30)
6. Solder power switch + USB-C port
7. Attach 18650 battery holders
8. Inspect + continuity test
9. Flash firmware
10. Current draw test before full power-up
11. Functional test

::: warning Battery safety
Never short 18650 cells. Keep a multimeter handy and verify polarity before inserting batteries. Reverse polarity will damage the IP5306 and potentially cause fire.
:::

::: tip Full guide coming soon
Detailed step-by-step with photos is in progress.
:::
