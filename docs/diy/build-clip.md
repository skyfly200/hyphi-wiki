# Build: Glowflora Clip

<StatusBadge type="hardware" /> <StatusBadge type="wip" label="Guide In Progress" />

Step-by-step assembly guide for the Glowflora Clip — a battery-powered LED filament bloom that clips onto bags, costumes, and festival gear.

::: tip Prerequisites
- Read [Tools & Materials](./tools) and gather everything before starting
- Read [Soldering Tips](./soldering) if you're new to soldering
- Have the [BOM](../glowflora/bom) open for part reference
:::

## What You're Building

A compact clip-on light: an LED filament wired to a coin cell battery holder and secured inside an origami lily flower. Estimated time: **30–60 min**.

## Materials

| Item | Notes |
|------|-------|
| LED filament | Bare filament, ~1–2cm |
| CR2032 coin cell battery | + holder |
| Alligator clip | For the clip mount |
| Origami paper | For the flower |
| Wire | Thin, flexible — 26–28 AWG |
| Heatshrink tubing | 3–4mm diameter |
| Hot glue sticks | — |

## Tools

| Tool | Notes |
|------|-------|
| Soldering iron | Temperature-controlled preferred |
| Hot glue gun | — |
| Scissors | For paper + heatshrink |
| Heat gun | Optional — can use lighter carefully |
| 3D-printed soldering jig | Optional but highly recommended |

### Soldering Jig

Print this before you start — it holds the LED filament steady while you solder the tiny pads.

<ModelViewer src="/JIG.glb" caption="LED Filament Soldering Jig — print before assembly" />

## Step 1 — Prepare the Battery Holder Stem

1. Cut two short lengths of wire (~8–10cm each).
2. Tin both wires with a small amount of solder.
3. Thread the wires through the battery holder contacts and solder in place — keep positive (+) and negative (−) clearly identified.
4. Bundle the wires together neatly using a twist tie to form a clean stem.

## Step 2 — Fold the Origami Lily

Fold a paper lily (or your flower of choice) using origami paper. The flower will sit over the LED assembly, so leave a clear opening in the center for the LED filament to poke through.

::: tip
Standard 6×6" origami paper works well. The lily will hide all the wiring inside the stem.
:::

## Step 3 — Test LED Polarity

Before soldering, **always test the LED polarity first**:

1. Hold the LED filament wires lightly against the battery holder terminals (positive to positive, negative to negative).
2. The LED should light up.
3. If it doesn't, flip the filament orientation and try again.
4. Note which end is positive (+) before soldering.

::: warning Always test first
LED filaments have a polarity — soldering them backwards means desoldering and redoing the joint. The test takes 5 seconds and saves real frustration.
:::

## Step 4 — Solder the LED Filament

1. Place the LED filament in the soldering jig (or use helping hands / tape to hold it steady).
2. Solder the positive wire to the (+) terminal of the LED filament.
3. Solder the negative wire to the (−) terminal.
4. Keep the joints small and clean — the filament pads are tiny.
5. Trim any excess wire close to the joints.

## Step 5 — Final Assembly

1. Thread the LED filament up through the center of the origami lily so the bloom faces outward.
2. Apply a small dab of hot glue inside the base of the flower to bond it to the wire stem.
3. Hold in place for 10–15 seconds until the glue sets.

## Step 6 — Secure the Junction

1. Slide a short length of heatshrink tubing over the solder joint / wire junction at the base of the flower.
2. Shrink it down with a heat gun (or carefully with a lighter).
3. This protects the joint from mechanical stress and tidies up the assembly.

## Step 7 — Test It

Insert the CR2032 coin cell into the holder (positive side up, matching the (+) marked on the holder).

Switch it on and admire your work. 🌸

::: tip Troubleshooting
- **No light** → check battery orientation and polarity of the solder joints
- **Flickering** → cold solder joint — reflow with the iron
- **Dim** → battery may be partially discharged; try a fresh CR2032
:::
