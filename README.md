# Hyphi Wiki

Open hardware documentation for Hyphi devices — OWLs protocol, Gloflora hardware, firmware guides, and DIY builds.

**Live at:** [wiki.hyphi.art](https://wiki.hyphi.art)

## Stack

- [VitePress](https://vitepress.dev) — Vue-native static site generator
- Vue 3 components (Pug + Sass) for custom UI elements
- Deployed on Netlify → `wiki.hyphi.art`

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build

```bash
npm run build
# → docs/.vitepress/dist/
```

## Structure

```
docs/
├── index.md              # Home page (VitePress hero layout)
├── owls/                 # OWLs BLE protocol spec
│   ├── index.md
│   ├── architecture.md
│   ├── ble-services.md
│   ├── wire-formats.md
│   ├── mesh.md
│   └── discovery.md
├── gloflora/             # Hardware docs
│   ├── index.md
│   ├── clip.md
│   ├── home.md
│   ├── bom.md
│   ├── current-limit.md
│   └── pcb.md
├── firmware/             # WLED + OWLs firmware
│   ├── index.md
│   ├── wled-setup.md
│   ├── wled-config.md
│   ├── owls-fw.md
│   ├── flashing.md
│   └── ota.md
├── diy/                  # Build guides
│   ├── index.md
│   ├── tools.md
│   ├── build-clip.md
│   ├── build-home.md
│   ├── led-wiring.md
│   └── soldering.md
└── .vitepress/
    ├── config.js         # Nav, sidebar, theme config
    └── theme/
        ├── index.js      # Theme registration
        ├── components/
        │   ├── HyphiLayout.vue   # Layout wrapper (Pug)
        │   ├── StatusBadge.vue   # <StatusBadge type="stable|wip|draft|hardware" />
        │   ├── UuidTable.vue     # BLE UUID reference tables
        │   └── WireFormat.vue    # Characteristic wire format tables
        └── styles/
            └── index.scss        # Full design system — overrides VitePress vars
```

## Custom Components

Use these in any `.md` file:

```md
<!-- Status badges -->
<StatusBadge type="stable" />
<StatusBadge type="wip" />
<StatusBadge type="draft" />
<StatusBadge type="hardware" label="BLE" />

<!-- UUID reference table -->
<UuidTable :rows="[
  { name: 'LED Control', uuid: 'f82d2279-...', desc: 'Power, mode, color' }
]" />

<!-- Wire format table -->
<WireFormat :rows="[
  { char: 'LED Power', type: 'BLEByte', desc: '0 = off, 1 = on' }
]" />
```

## Netlify Deploy

1. Push repo to GitHub
2. New site in Netlify → Import from GitHub
3. Build command: `npm run build`
4. Publish directory: `docs/.vitepress/dist`
5. Add custom domain: `wiki.hyphi.art`
6. In your DNS (Netlify DNS): add CNAME `wiki` → `<your-netlify-site>.netlify.app`

## Adding Content

New page: create a `.md` file in the right section folder, then add it to the `sidebar` in `docs/.vitepress/config.js`.

Add your logo PNG as `docs/public/logo.png` and favicon as `docs/public/favicon.png`.
