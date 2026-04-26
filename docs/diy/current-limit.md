# Current Limit Configuration

The GlowFlora Home PCB uses an **MT9700N** — a programmable current limiting switch IC — to protect the LED strip and battery from overcurrent. The MT9700N sets its output current limit via a resistor on its `ISET` pin: the higher the resistance, the lower the current limit.

[MT9700N Datasheet →](https://www.lcsc.com/datasheet/C89855.pdf)

**Formula:**

```
I_lim (mA) = 6800 / R_set (kΩ)
```

A 3-tier solder jumper matrix — 6 resistors, 9 jumpers — lets you select a current limit for any LED count without reflowing components.

## Jumper Options

Each tier has four possible states. Select **one state per tier** by closing the corresponding jumper(s):

| State | Jumpers to close | R contribution |
|:------|:-----------------|:---------------|
| **bypass** | 1 jumper (bypass) | Shorts the tier — 0 Ω |
| **A** | 1 jumper (A) | R_A |
| **B** | 1 jumper (B) | R_B |
| **A + B** | 2 jumpers (A and B) | R_A ∥ R_B (parallel) |

`R_set = R_T1 + R_T2 + R_T3`

::: tip A + B means two physical jumpers
Selecting **A + B** puts both resistors in parallel and requires closing two jumpers on that tier — one for A and one for B. This is still a single tier selection.
:::

## Calculator

<GlowFloraCurrentLimit />
