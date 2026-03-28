<template>
  <figure class="yt-wrap">
    <div class="yt-frame">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${id}?rel=0`"
        :title="title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        frameborder="0"
      />
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  id:      { type: String, required: true },   // YouTube video ID only, e.g. "dQw4w9WgXcQ"
  title:   { type: String, default: 'Video' },
  caption: { type: String, default: '' },
})
</script>

<style scoped>
.yt-wrap {
  margin: 1.5rem 0;
}

.yt-frame {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.yt-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}
</style>
