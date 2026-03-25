# LED Wiring Basics

<StatusBadge type="stable" />

Reference guide for wiring WS2812B addressable LEDs — the LED type used in all Glow Flora products.

## WS2812B Pinout

```
        ┌─────────────┐
   VCC ─┤ 1         4 ├─ VSS (GND)
   DOut─┤ 2         3 ├─ DIn
        └─────────────┘
        (top view, pin 1 = notch corner)
```

| Pin | Name | Description |
|-----|------|-------------|
| 1 | VCC | Power — 5V (3.5V–5.3V range) |
| 2 | DOUT | Data out → DIN of next LED |
| 3 | DIN | Data in from MCU or previous LED |
| 4 | VSS | Ground |

## Chaining LEDs

LEDs are chained in series — DOUT of one connects to DIN of the next:

```
MCU GPIO ──[330Ω]──► DIN₁ → DOUT₁ ──► DIN₂ → DOUT₂ ──► ...
5V ────────────────────────────────────────────────────────►
GND ───────────────────────────────────────────────────────►
```

::: warning Data resistor
Always include a **330Ω resistor** between the MCU GPIO and DIN of the first LED. See [Current Limit Config](../gloflora/current-limit) for details.
:::

## Power Injection

For longer strips (15+ LEDs), voltage drop along the strip causes LEDs at the far end to be dimmer and shift color. Inject power at multiple points:

```
5V ──┬──► LED 1 ... LED 15 ──┬──► LED 16 ... LED 30
     │   (data chained)       │
     └──────────────►5V rail ─┘  (power injection)
GND ─────────────────────────────────────────────►
```

For Glow Flora Home (30 LEDs) at full brightness, inject power at LED 15.

## Voltage

WS2812B runs on **5V**. The ESP32 GPIO outputs 3.3V logic — this usually works fine for data signal, but a level shifter (e.g. 74AHCT125) can improve reliability for longer runs.

For Glow Flora (short runs ≤30 LEDs), the 3.3V signal without a level shifter is reliable in practice.

## WS2812B vs SK6812

Glow Flora uses WS2812B. SK6812 is a common alternative with similar pinout but adds a white channel (RGBW). WLED supports both — select the correct LED type in [WLED Config](../firmware/wled-config).

| Feature | WS2812B | SK6812 RGBW |
|---------|---------|-------------|
| Channels | 3 (RGB) | 4 (RGBW) |
| Protocol | 800kHz | 800kHz |
| Power (max white) | 60mA | 80mA |
| WLED support | ✅ | ✅ |
