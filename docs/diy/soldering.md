# Soldering Tips

<StatusBadge type="stable" />

Practical soldering advice for assembling Hyphi kits — wiring LED strips, connectors, and battery leads onto a pre-assembled board.

## Iron Temperature

| Solder type | Temperature |
|-------------|-------------|
| 63/37 leaded | 320–360°C |
| Lead-free SAC305 | 370–400°C |

Start at 350°C and adjust. Too cold = cold joints. Too hot = lifted pads, burned flux.

## The Basics

**Tin the tip first.** A dirty tip is the #1 cause of bad joints. Before every session:
1. Wipe tip on damp sponge or brass wool
2. Apply a small bead of fresh solder to the tip
3. The tip should be shiny silver — not dull or black

**Heat the joint, not the solder.** Touch the iron to the pad and wire simultaneously, then feed solder into the joint (not onto the iron).

**Good joints** look shiny, concave, and volcano-shaped. Dull, blobby, or grainy joints are cold — reheat and add a touch of flux.

## Soldering Wires to Pads

1. Pre-tin the wire end — strip ~3mm, twist strands, touch iron + solder to wet the tip
2. Pre-tin the board pad with a small blob of solder
3. Hold the tinned wire to the tinned pad, touch the iron briefly — the two blobs merge
4. Remove iron, hold still for 2–3 seconds until solid

::: tip Flux is your friend
Apply flux to pads before soldering. It dramatically improves flow and reduces bridges.
:::

## Debugging Bad Joints

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Cold joint (dull/grainy) | Too cold, not enough heat time | Reheat + add flux |
| Solder bridge | Too much solder, too hot | Wick with braid + flux |
| Lifted pad | Too hot, too long on pad | Repair with wire jumper |
| LED works then fails | Overheated LED | WS2812B dies above ~260°C sustained |

## WS2812B Soldering Notes

WS2812B LEDs are heat-sensitive. Rules:
- Solder quickly — 2–3 seconds max per joint at 320°C
- If a previously working LED stops responding after rework, it's likely dead — replace it

## Cleanup

After soldering, clean flux residue with isopropyl alcohol 90%+ and a cotton swab. No-clean flux is technically benign but can cause confusion during continuity tests.
