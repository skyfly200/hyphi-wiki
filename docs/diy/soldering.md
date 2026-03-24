# Soldering Tips

<StatusBadge type="stable" />

Practical soldering advice for building Hyphi PCBs, particularly for SMT work.

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

**Heat the joint, not the solder.** Touch the iron to the pad + component lead simultaneously, then feed solder into the joint (not onto the iron).

**Good joints** look shiny, concave, and volcano-shaped. Dull, blobby, or grainy joints are cold — reheat and add a touch of flux.

## SMT Technique (0402, ICs)

### Reflow with Hot Air (Recommended)
1. Apply solder paste to pads via stencil or manually
2. Place components with tweezers
3. Hot air at 320–350°C, 40–50 L/min airflow
4. Move in slow circles until solder flows and components self-align
5. Let cool without disturbing

### Hand Soldering SMT
1. Pre-tin one pad with a small amount of solder
2. Hold component with tweezers, reflow the pre-tinned pad to tack it down
3. Solder the remaining pad(s) normally
4. Reflow the first joint to clean it up

::: tip Flux is your friend
Apply flux paste or pen to pads before soldering SMT. It dramatically improves flow and reduces bridges.
:::

## Debugging Bad Joints

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Cold joint (dull/grainy) | Too cold, not enough heat time | Reheat + add flux |
| Solder bridge | Too much solder, too hot | Wick with braid + flux |
| Lifted pad | Too hot, too long on pad | Repair with wire jumper |
| Component tombstoned | Uneven heat, uneven solder | Reflow both pads simultaneously |
| LED works then fails | Overheated LED | WS2812B dies above ~260°C sustained |

## WS2812B Soldering Notes

WS2812B LEDs are heat-sensitive. Rules:
- Hand solder quickly — 2–3 seconds max per joint at 320°C
- Hot air: stay below 260°C peak, move quickly
- If a previously working LED stops animating after rework, it's likely dead — desolder and replace

## Cleanup

After soldering, clean flux residue with isopropyl alcohol 90%+ and a cotton swab or brush. No-clean flux residue is technically benign but can cause confusion when doing continuity tests.
