# Build: Glowflora Home

<StatusBadge type="hardware" /> <StatusBadge type="wip" label="Guide In Progress" />

Step-by-step assembly guide for the Glowflora Home — a 30-LED ESP32 art piece running WLED, powered by dual 18650 cells.

## What You're Building

Your board arrives **pre-assembled** (all SMT components soldered). This guide covers wiring the LED strip, power switch, and 18650 battery holders, then flashing and configuring WLED. Estimated time: **2–3 hours**.

::: warning Battery safety
18650 cells can deliver dangerous short-circuit currents. Never short the terminals. Verify polarity before inserting cells — reverse polarity will damage the board.
:::

## Tools

| Tool | Notes |
|------|-------|
| Soldering iron | Temperature-controlled — 320–360°C for 63/37 solder |
| Solder | 63/37 or 60/40, 0.5mm diameter |
| Flux pen | Apply to pads before soldering — makes a big difference |
| Fine-tip tweezers | ESD-safe |
| Wire strippers | For stripping 24–26 AWG wire |
| Multimeter | Continuity mode for polarity checks and short detection |
| PCB holder / helping hands | Keeps the board stable while soldering |
| USB-C cable | Data-capable (many cables are charge-only — test yours) |
| IPA 90%+ + swabs | Flux cleanup after soldering |

## Materials

| Item | Notes |
|------|-------|
| Glowflora Home board | Pre-assembled, shipped |
| WS2812B LED strip, 30 LEDs | Check [BOM](../glowflora/bom) for exact spec |
| 2× 18650 cells | High-drain recommended — Samsung 25R, Sony VTC5, or similar |
| 18650 battery holders × 2 | Matching the board footprint |
| Power switch | SPDT slide switch — see BOM |
| 24–26 AWG wire | Silicone-insulated preferred — flexible and heat-resistant |
| Heatshrink tubing | 3mm and 5mm assortment |

## Step 1 — Inspect the Board

Before anything else, inspect the assembled board under good light:

- Check for solder bridges between pads (especially near the MCU and USB-C port)
- Confirm the IP5306 power bank IC and MCU are seated flat — no lifted corners
- Check for any visibly missing or misaligned components
- Do a quick continuity check: **confirm no short between 5V and GND**

If you find bridges, clean with flux + solder wick before proceeding.

## Step 2 — Prepare the LED Strip

1. Cut the WS2812B strip to **30 LEDs** at the designated cut lines (between pads, not through a pad).
2. At the **input end** of the strip, expose the three solder pads: **5V**, **DIN**, **GND**.
3. Cut three short wire leads (~10cm) — use different colors: red (5V), white or yellow (data), black (GND).
4. Strip ~3mm from each end of each wire.
5. **Pre-tin** each wire end: twist the strands, touch iron + solder to wet them.
6. **Pre-tin** each pad on the strip with a small blob of solder.
7. Solder wires to pads — hold the tinned wire to the tinned pad, touch the iron briefly until the blobs merge. Remove iron, hold still 2–3 sec.

::: warning Heat sensitivity
WS2812B LEDs die from sustained heat above ~260°C. Keep each joint to **2–3 seconds max**. If a pad needs more work, let it cool 10 seconds before retrying.
:::

## Step 3 — Wire LED Strip to Board

Locate the LED header pads on the board (labeled **5V**, **DAT**, **GND**):

```
Board pad  →  Wire  →  LED strip pad
5V         →  Red   →  5V
DAT        →  Data  →  DIN
GND        →  Black →  GND
```

::: tip Data resistor
The board includes a **330Ω resistor** on the data line — it's already on the PCB. Do not add another resistor in-line on your wire.
:::

Solder each wire to its board pad using the same pre-tin → join technique from Step 2. Route the wires neatly and secure with a dab of hot glue if needed.

## Step 4 — Wire the Power Switch

The slide switch connects between the battery output and the board's main power rail.

1. Cut two leads to length for your enclosure layout (~8–12cm).
2. Pre-tin the wire ends and the switch terminals.
3. Solder one wire to the **center** terminal (common) and one to either **outer** terminal (on/off — test which gives you continuity in the ON position with your multimeter).
4. Solder the other ends to the board's **SW** pads (polarity doesn't matter for a switch).
5. Cover the switch terminals with heatshrink.

## Step 5 — Wire the Battery Holders

1. Identify the **positive (+)** and **negative (−)** leads on each 18650 holder.
2. Wire both holders **in parallel**: positives together → to board **VBAT+**, negatives together → to board **VBAT−**.
3. **Before soldering to the board**, double-check polarity with your multimeter — measure the holder leads against the board's labeled pads.
4. Solder the parallel bundle to the board pads. Keep leads short and tidy.
5. Cover all exposed junctions with heatshrink.

```
Holder 1 (+) ──┐
               ├──► Board VBAT+
Holder 2 (+) ──┘

Holder 1 (−) ──┐
               ├──► Board VBAT−
Holder 2 (−) ──┘
```

## Step 6 — Inspect & Continuity Test

Before inserting batteries:

- Visually inspect all solder joints — they should be shiny and volcano-shaped, not dull or blobby
- Clean flux residue with IPA + swab
- Continuity check: **confirm no short between VBAT+ and VBAT−**
- Continuity check: **confirm no short between 5V and GND on the LED strip leads**
- Confirm data line connects from DAT pad through to LED strip DIN

## Step 7 — First Power-Up

1. Insert **one** 18650 cell only (leave the second slot empty for safety).
2. Flip the power switch ON.
3. The board should enumerate a Wi-Fi access point: **WLED-AP** (or similar).
4. If nothing happens — switch OFF immediately, recheck wiring.
5. If you smell burning — switch OFF immediately, inspect for shorts.

Once the AP appears, insert the second cell.

## Step 8 — Flash & Configure WLED

Follow the [WLED Setup](../firmware/wled-setup) guide to:

1. Connect to the WLED-AP access point
2. Configure your home Wi-Fi network
3. Set **LED count to 30** and **LED type to WS2812B**
4. Set **maximum current to 1000mA** (enforces a safe brightness cap for the 18650s)
5. Save and reboot

See [WLED Custom Config](../firmware/wled-config) for preset setup and brightness tuning.

## Step 9 — Functional Test

With WLED running:

- Trigger a simple effect (e.g. solid white at 20% brightness)
- Confirm all 30 LEDs respond
- Check for any dead LEDs — if LED *N* and everything after it is dark, the solder joint at LED *N*'s DIN pad is suspect
- Run at moderate brightness for 5 minutes and check that the board and battery holders don't get hot

::: tip Troubleshooting
| Symptom | Likely cause |
|---------|-------------|
| No Wi-Fi AP | Board not booting — check power switch wiring and battery polarity |
| LEDs 1–N work, rest dead | Bad joint on LED N's DIN or DOUT pad |
| All LEDs flicker | Loose data wire or missing ground connection |
| Dim / wrong colors at strip end | Voltage drop — add a 5V power injection wire at LED 15 |
| Board gets very hot | Short or excessive current draw — power off and inspect |
:::
