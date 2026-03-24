<!-- docs/.vitepress/theme/components/StatusBadge.vue -->
<template lang="pug">
span.hyphi-badge(:class="`hyphi-badge--${type}`")
  span.dot ●
  | {{ label || labelMap[type] || type }}
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'draft',
    // 'stable' | 'wip' | 'draft' | 'hardware'
  },
  label: String,
})

const labelMap = {
  stable:   'Stable',
  wip:      'Work in Progress',
  draft:    'Draft',
  hardware: 'Hardware',
}
</script>

<style lang="scss" scoped>
.dot { font-size: .5em; margin-right: .15em; }
</style>
