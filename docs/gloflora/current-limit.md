# Current Limit Config

<StatusBadge type="stable" /> <StatusBadge type="hardware" />

WS2812B LEDs draw up to **60mA per LED** at full white. Without current limiting, strings will brownout batteries, blow fuses, or damage the MCU's 5V rail. Glow Flora uses a resistor-based current limit on the data line combined with power budget planning.

## Power Budget Formula

```
Total current (mA) = LED count × channels on × mA per channel

WS2812B max per channel: 20mA (R/G/B each)
Max per LED (full white): 60mA
```

**Example — Glow Flora Home (30 LEDs):**
```
Worst case: 30 × 60mA = 1800mA = 1.8A
```
At 5V: 1.8A × 5V = **9W** — this exceeds safe 18650 discharge rates at low battery. Config target is **40% brightness cap** in WLED.

## Data Line Resistor

Place a **300–500Ω resistor** in series on the data line between the MCU GPIO and the DIN pin of the first LED. This:
- Limits ringing/reflections on the signal line
- Protects the ESP32 GPIO from short circuit during power-on

**Recommended value: 330Ω (standard)**

```
ESP32 GPIO ──[ 330Ω ]──► DIN (LED 1) ──► DIN (LED 2) ──► ...
```

## Decoupling Capacitor

Add a **100–1000μF capacitor** across the 5V power rail close to the first LED. This absorbs inrush current spikes when LEDs switch on simultaneously.

```
5V ──┬──► LED VCC
     │
    [C]  100–1000μF electrolytic
     │
GND ─┴──► LED GND
```

## WLED Brightness Cap

Set a maximum brightness in WLED to enforce a software current limit:

1. WLED UI → Config → LED Preferences
2. **Maximum Brightness**: set to `100` (of 255) for ~40% cap
3. **Maximum Current**: set your mA budget (e.g. `1000` for 1A)

WLED will automatically scale brightness down to stay within the current budget.

::: warning 18650 discharge rates
Standard 18650 cells are rated 500mA–2A continuous discharge. At 1.8A you're at the limit of cheap cells. Use high-drain cells (Samsung 25R, Sony VTC5) for Glow Flora Home, or enforce the 1A WLED limit.
:::

## Glow Flora Clip Config

| Parameter | Value |
|-----------|-------|
| LED count | ~12 |
| Max current (full white) | 720mA |
| Recommended WLED limit | 400mA |
| Data resistor | 330Ω |
| Decoupling cap | 100μF |

## Glow Flora Home Config

| Parameter | Value |
|-----------|-------|
| LED count | 30 |
| Max current (full white) | 1800mA |
| Recommended WLED limit | 1000mA |
| Data resistor | 330Ω |
| Decoupling cap | 470μF |
| Battery | 2× 18650 in parallel |
