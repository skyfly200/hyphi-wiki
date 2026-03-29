# Schematic & BOM

<StatusBadge type="stable" />

Bill of materials for Glowflora Home V1.0 PCB (Prototype V2). All SMT components are sourced from LCSC and assembled by JLCPCB.

## Glowflora Home V1.0 — Full BOM

| No. | Qty | Ref(s) | Part | Value | LCSC |
|-----|-----|--------|------|-------|------|
| 1 | 10 | J1A, J1B, J1C, J2A, J2B, J2C, J3A, J3B, J3C, BYPASS | Open Solder Jumper | — | — |
| 2 | 1 | C1 | Electrolytic cap | 100µF | [C5102671](https://www.lcsc.com/product-detail/C5102671.html) |
| 3 | 2 | C2, C3 | Ceramic cap | 10µF 0603 | [C96446](https://www.lcsc.com/product-detail/C96446.html) |
| 4 | 13 | C4–C16 | Ceramic cap | 100nF 0402 | [C1525](https://www.lcsc.com/product-detail/C1525.html) |
| 5 | 1 | DCBOOST | DC Boost Converter | — | — |
| 6 | 1 | F1 | Resettable fuse | SMD1206-110-8 | [C466410​27](https://www.lcsc.com/product-detail/C46641027.html) |
| 7 | 3 | HOLE1–3 | Mounting hole | M3 | — |
| 8 | 12 | LED1–LED12 | Addressable LED | WS2812B-V5 5050 | [C691873](https://www.lcsc.com/product-detail/C691873.html) |
| 9 | 1 | R1 | Resistor | 330Ω 0402 | [C25104](https://www.lcsc.com/product-detail/C25104.html) |
| 10 | 1 | R1a | Resistor | 3.3kΩ 0805 | [C26010](https://www.lcsc.com/product-detail/C26010.html) |
| 11 | 1 | R1b | Resistor | 20kΩ 0805 | [C4328](https://www.lcsc.com/product-detail/C4328.html) |
| 12 | 1 | R2a | Resistor | 3.9kΩ 0805 | [C17614](https://www.lcsc.com/product-detail/C17614.html) |
| 13 | 1 | R2b | Resistor | 2.4kΩ 0805 | [C17526](https://www.lcsc.com/product-detail/C17526.html) |
| 14 | 1 | R3a | Resistor | 6.8kΩ 0805 | [C17772](https://www.lcsc.com/product-detail/C17772.html) |
| 15 | 1 | R3b | Resistor | 3kΩ 0805 | [C17661](https://www.lcsc.com/product-detail/C17661.html) |
| 16 | 2 | R4, R5 | Resistor | 200kΩ 0402 | [C25764](https://www.lcsc.com/product-detail/C25764.html) |
| 17 | 1 | SW1 | Slide switch | K1-1502SA-01 | [C145915](https://www.lcsc.com/product-detail/C145915.html) |
| 18 | 1 | U1 | MCU | Seeed XIAO ESP32-C3 | [C191893​85](https://www.lcsc.com/product-detail/C19189385.html) |
| 19 | 1 | U2 | Current limit IC | MT9700-N SOT-23-5 | [C424418​43](https://www.lcsc.com/product-detail/C42441843.html) |

## Notes

- **R1a / R1b, R2a / R2b, R3a / R3b** — resistor pairs for the MT9700-N current limit tiers. See [Current Limit Config](../diy/current-limit) for values and jumper configuration.
- **J1A–J3C + BYPASS** — open solder jumpers that select the active current limit tier. See [Current Limit Config](../diy/current-limit).
- **DCBOOST** — DC boost converter for LED rail. Specific part TBD on schematic.
- **HOLE1–3** — M3 mounting holes, not populated.
