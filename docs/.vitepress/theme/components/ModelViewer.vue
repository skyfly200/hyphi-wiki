<template>
  <figure class="model-viewer-wrap">
    <model-viewer
      :src="src"
      :alt="alt"
      :poster="poster || undefined"
      auto-rotate
      camera-controls
      shadow-intensity="0.5"
      environment-image="legacy"
      :exposure="exposure"
      tone-mapping="commerce"
    />
    <div class="model-viewer-footer">
      <figcaption v-if="caption">{{ caption }}</figcaption>
      <a v-if="download" :href="download" :download="downloadName" class="model-download-btn">
        ↓ Download STL
      </a>
    </div>
  </figure>
</template>

<script setup>
defineProps({
  src:          { type: String, required: true },
  alt:          { type: String, default: '3D model' },
  poster:       { type: String, default: '' },
  caption:      { type: String, default: '' },
  exposure:     { type: Number, default: 2.0 },
  download:     { type: String, default: '' },      // URL to the downloadable STL
  downloadName: { type: String, default: 'model.stl' },
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
  background: #f0f0f0;
  display: block;
}

.model-viewer-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  gap: 0.5rem;
}

figcaption {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.model-download-btn {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  border-radius: 5px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
}
.model-download-btn:hover {
  background: var(--vp-c-brand-1);
  color: white;
}
</style>
