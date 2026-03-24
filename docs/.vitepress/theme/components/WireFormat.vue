<!-- docs/.vitepress/theme/components/WireFormat.vue -->
<template lang="pug">
.hyphi-wire-table
  .hyphi-wire-header
    span Characteristic
    span Type
    span Format / Notes
  .hyphi-wire-row(v-for="row in rows" :key="row.char")
    span.char {{ row.char }}
    span.type {{ row.type }}
    span.desc(v-html="row.desc")
</template>

<script setup>
defineProps({
  rows: {
    type: Array,
    required: true,
    // [{ char, type, desc }]
  }
})
</script>

<style lang="scss" scoped>
.hyphi-wire-table {
  border: 1px solid rgba(192,96,255,.18);
  border-radius: 4px;
  overflow: hidden;
  margin: 1.2rem 0;
}

.hyphi-wire-header {
  display: grid;
  grid-template-columns: 200px 90px 1fr;
  gap: .5rem 1.5rem;
  padding: .6rem 1rem;
  background: rgba(192,96,255,.08);
  font-family: 'Space Mono', monospace;
  font-size: .65rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: #C060FF;
  border-bottom: 1px solid rgba(192,96,255,.18);
}
</style>
