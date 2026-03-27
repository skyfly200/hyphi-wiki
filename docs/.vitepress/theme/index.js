import DefaultTheme from 'vitepress/theme'
import HyphiLayout from './components/HyphiLayout.vue'
import StatusBadge from './components/StatusBadge.vue'
import UuidTable from './components/UuidTable.vue'
import WireFormat from './components/WireFormat.vue'
import GlowFloraCurrentLimit from './components/GlowFloraCurrentLimit.vue'
import './styles/index.scss'

export default {
  extends: DefaultTheme,
  // Override layout to inject our custom header/footer chrome
  Layout: HyphiLayout,
  enhanceApp({ app }) {
    // Register global components usable in any .md file
    app.component('StatusBadge', StatusBadge)
    app.component('UuidTable', UuidTable)
    app.component('WireFormat', WireFormat)
    app.component('GlowFloraCurrentLimit', GlowFloraCurrentLimit)
  }
}
