# Current Limit Configuration

The MT9700N sets its current limit via a resistor network on the `ISET` pin.
A 3-tier solder jumper matrix — 6 resistors, 9 jumpers — lets you reconfigure
for any LED count without reflowing parts.

## Jumper States

Each tier has three solder jumpers. Close exactly one option per tier:

| Close | Effect | R contribution |
|:------|:-------|:---------------|
| **bypass** | Shorts the tier wire — contributes nothing | 0 Ω |
| **A** | R_A in circuit | R_A |
| **B** | R_B in circuit | R_B |
| **A + B** | Both resistors in parallel | R_A ∥ R_B |

`R_set = R_T1 + R_T2 + R_T3`

## Calculator

<GlowFloraCurrentLimit />
