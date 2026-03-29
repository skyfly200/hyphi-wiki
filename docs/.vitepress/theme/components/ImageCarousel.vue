<template>
  <figure class="carousel">
    <div class="carousel-track" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <img :src="images[current].src" :alt="images[current].caption || ''" />
    </div>

    <button class="carousel-btn carousel-prev" @click="prev" aria-label="Previous">&#8249;</button>
    <button class="carousel-btn carousel-next" @click="next" aria-label="Next">&#8250;</button>

    <figcaption v-if="images[current].caption">{{ images[current].caption }}</figcaption>

    <div class="carousel-dots">
      <button
        v-for="(img, i) in images"
        :key="i"
        :class="['carousel-dot', { active: i === current }]"
        @click="current = i"
        :aria-label="`Go to image ${i + 1}`"
      />
    </div>
  </figure>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  // each item: { src: String, caption?: String }
})

const current = ref(0)

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}
function next() {
  current.value = (current.value + 1) % props.images.length
}

// Swipe support
let touchStartX = 0
function onTouchStart(e) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (dx > 40) prev()
  else if (dx < -40) next()
}
</script>

<style scoped>
.carousel {
  position: relative;
  margin: 1.5rem 0;
  user-select: none;
}

.carousel-track {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  line-height: 0;
}

.carousel-track img {
  width: 100%;
  height: 420px;
  object-fit: contain;
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  background: rgba(0,0,0,0.45);
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 2;
}
.carousel-btn:hover { background: rgba(0,0,0,0.7); }
.carousel-prev { left: 10px; }
.carousel-next { right: 10px; }

figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 0.6rem;
}

.carousel-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: var(--vp-c-divider);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s;
}
.carousel-dot.active { background: var(--vp-c-brand-1); }
</style>
