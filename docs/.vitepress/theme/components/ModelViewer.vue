<template>
  <figure class="model-viewer-wrap">
    <model-viewer
      :src="src"
      :alt="alt"
      :poster="poster || undefined"
      auto-rotate
      camera-controls
      shadow-intensity="1"
      environment-image="neutral"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src:     { type: String, required: true },
  alt:     { type: String, default: '3D model' },
  poster:  { type: String, default: '' },   // optional preview image while loading
  caption: { type: String, default: '' },
})
</script>

<style scoped>
.model-viewer-wrap {
  margin: 1.5rem 0;
}

model-viewer {
  width: 100%;
  height: 420px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  display: block;
}

figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}
</style>
