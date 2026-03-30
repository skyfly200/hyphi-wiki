import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hyphi Wiki',
  description: 'Open hardware documentation — OWLS protocol, Glowflora, firmware, and DIY guides',
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#C060FF' }],
    // model-viewer web component — enables <ModelViewer> in any .md page
    ['script', { type: 'module', src: 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js' }],
  ],

  themeConfig: {
    logo: '/ColorLogo.svg',
    siteTitle: 'Hyphi Wiki',

    nav: [
      { text: 'Glowflora', link: '/glowflora/' },
      { text: 'Firmware', link: '/firmware/' },
      { text: 'DIY Guides', link: '/diy/' },
      { text: 'Hyphi Hub', link: '/hub/' },
      { text: 'OWLS Protocol', link: '/owls/' },
      { text: 'Open Source', link: '/open-source' },
      { text: 'Resumes', link: '/resume' },
    ],

    sidebar: {
      '/owls/': [
        {
          text: 'OWLS Protocol',
          items: [
            { text: 'Overview', link: '/owls/' },
            { text: 'Architecture', link: '/owls/architecture' },
            { text: 'BLE Services & UUIDs', link: '/owls/ble-services' },
            { text: 'Characteristic Formats', link: '/owls/wire-formats' },
            { text: 'Mesh Topology', link: '/owls/mesh' },
          ]
        }
      ],
      '/hub/': [
        {
          text: 'Hyphi Hub',
          items: [
            { text: 'Overview', link: '/hub/' },
            { text: 'Device Discovery', link: '/hub/discovery' },
            { text: 'Device Profiles', link: '/hub/device-profiles' },
          ]
        }
      ],
      '/glowflora/': [
        {
          text: 'Glowflora',
          items: [
            { text: 'Overview', link: '/glowflora/' },
          ]
        },
        {
          text: 'Glowflora Clip',
          items: [
            { text: 'Clip Overview', link: '/glowflora/clip' },
            { text: 'Build: Clip', link: '/diy/build-clip' },
          ]
        },
        {
          text: 'Glowflora Home',
          items: [
            { text: 'Home Overview', link: '/glowflora/home' },
            { text: 'R&D', link: '/glowflora/home-rnd' },
            { text: 'Schematic & BOM', link: '/glowflora/bom' },
            { text: 'PCB Fabrication', link: '/glowflora/pcb' },
            { text: 'Build: Home', link: '/diy/build-home' },
          ]
        },
        {
          text: 'Glowflora Go',
          items: [
            { text: 'Go Overview', link: '/glowflora/go' },
          ]
        },
      ],
      '/firmware/': [
        {
          text: 'Firmware',
          items: [
            { text: 'Overview', link: '/firmware/' },
          ]
        },
        {
          text: 'WLED',
          items: [
            { text: 'WLED Overview', link: '/firmware/wled' },
            { text: 'WLED Setup', link: '/firmware/wled-setup' },
            { text: 'WLED Custom Config', link: '/firmware/wled-config' },
            { text: 'Flashing Guide', link: '/firmware/flashing' },
            { text: 'OTA Updates', link: '/firmware/ota' },
          ]
        },
        {
          text: 'BLE Devices',
          items: [
            { text: 'BLE Device Firmware', link: '/firmware/owls-fw' },
          ]
        }
      ],
      '/diy/': [
        {
          text: 'DIY Build Guides',
          items: [
            { text: 'Overview', link: '/diy/' },
            { text: 'Current Limit Config', link: '/diy/current-limit' },
          ]
        },
        {
          text: 'Glowflora Clip',
          items: [
            { text: 'Build: Clip', link: '/diy/build-clip' },
          ]
        },
        {
          text: 'Glowflora Home',
          items: [
            { text: 'Build: Home', link: '/diy/build-home' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/skyfly200/hyphi-wiki' },
      { icon: { svg: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>' }, link: 'https://instagram.com/hyphi.creations' },
    ],

    editLink: {
      pattern: 'https://github.com/skyfly200/hyphi-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Open Hardware · Open Source · Open Protocol',
      copyright: '© 2026 Hyphi — Built with VitePress'
    },

    search: {
      provider: 'local'
    },
  },

  // Dark-mode only — disable the appearance toggle
  appearance: false,

  // Allow Vue components in .md files
  // Mark model-viewer as a custom element so SSR skips it (browser-only web component)
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'model-viewer'
      }
    }
  },
})
