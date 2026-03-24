<!-- docs/.vitepress/theme/components/UuidTable.vue -->
<template lang="pug">
.hyphi-uuid-table
  table
    thead
      tr
        th Name
        th UUID
        th Description
    tbody
      tr(v-for="row in rows" :key="row.uuid")
        td.name {{ row.name }}
        td.uuid {{ row.uuid }}
        td.desc {{ row.desc }}
</template>

<script setup>
defineProps({
  rows: {
    type: Array,
    required: true,
    // [{ name, uuid, desc }]
  }
})
</script>
