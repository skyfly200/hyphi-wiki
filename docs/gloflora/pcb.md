# PCB Fabrication

<StatusBadge type="stable" />

Hyphi PCBs are manufactured at **JLCPCB** with SMT assembly. This page covers the settings and export workflow used for Glow Flora boards.

## JLCPCB Settings

| Parameter | Value |
|-----------|-------|
| Layers | 2 |
| PCB Color | Black |
| Surface finish | ENIG (gold) — recommended for longevity |
| Copper weight | 1 oz |
| Min hole size | 0.3mm |
| SMT Assembly | Yes — JLCPCB economic SMT |

::: tip Open Source Stars
Hyphi is pursuing the **JLCPCB Open Source Stars** program for 80% PCB funding + coupons on qualifying open-source designs. Bare PCB sales to the maker community count toward this.
:::

## EasyEDA → JLCPCB Export Workflow

1. **EasyEDA** → File → Export → PCB → **Gerber (RS-274X)**
2. Export **BOM** (File → Export → BOM) as CSV
3. Export **CPL** (Component Placement List) as CSV
4. Upload Gerber zip to [jlcpcb.com](https://jlcpcb.com)
5. Enable **SMT Assembly**, upload BOM + CPL
6. Review component matches — fix any unmatched parts manually
7. Confirm 3D preview before ordering

## Design Rules

JLCPCB economic SMT constraints to keep in mind:

| Rule | Minimum |
|------|---------|
| Trace width | 0.1mm (preferred: 0.2mm+) |
| Via diameter | 0.5mm |
| Via hole | 0.3mm |
| Pad to pad clearance | 0.1mm |
| Smallest SMT package | 0402 (preferred for hand rework: 0603+) |

::: warning 0402 rework
Glow Flora Clip uses 0402 passives for density. These are not hand-solderable without a hot air station. If you're building from bare boards, source 0603 equivalents and modify the footprint, or use the JLCPCB assembled version.
:::
