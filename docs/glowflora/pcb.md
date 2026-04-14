# PCB Fabrication

<StatusBadge type="stable" />

<ImageCarousel :images="[
  { src: '/images/glowflora/pcb-home-angled.png', caption: 'PCB — angled view' },
  { src: '/images/glowflora/pcb-home-top.png',    caption: 'PCB — top' },
  { src: '/images/glowflora/pcb-home-back.png',   caption: 'PCB — back' },
  { src: '/images/glowflora/pcb-home-bottom.png', caption: 'PCB — bottom' },
  { src: '/images/glowflora/pcb-home-front.png',  caption: 'PCB — front edge' },
  { src: '/images/glowflora/pcb-home-left.png',   caption: 'PCB — left' },
  { src: '/images/glowflora/pcb-home-right.png',  caption: 'PCB — right' },
  { src: '/images/glowflora/pcb-home-side.png',   caption: 'PCB — side' },
]" />

Hyphi PCBs are manufactured at **JLCPCB** with SMT assembly. This page covers the settings and export workflow used for GlowFlora boards.

## JLCPCB Settings

| Parameter | Value |
|-----------|-------|
| Layers | 2 |
| PCB Color | Black |
| Surface finish | ENIG (gold) — recommended for longevity |
| Copper weight | 1 oz |
| Min hole size | 0.3mm |
| SMT Assembly | Yes — JLCPCB economic SMT |

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
GlowFlora Clip uses 0402 passives for density. These are not hand-solderable without a hot air station. If you're building from bare boards, source 0603 equivalents and modify the footprint, or use the JLCPCB assembled version.
:::
