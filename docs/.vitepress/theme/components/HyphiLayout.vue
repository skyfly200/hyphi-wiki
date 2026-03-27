<!-- docs/.vitepress/theme/components/HyphiLayout.vue -->
<template lang="pug">
Layout
  template(#layout-top)
    .hyphi-nav-glow(aria-hidden="true")
    .hyphi-draft-banner
      | ⚠ This wiki is a work in progress — some pages may be incomplete or contain inaccurate information.
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style lang="scss">
.hyphi-draft-banner {
  position: sticky;
  top: 0;
  z-index: 998;
  width: 100%;
  padding: .45rem 1rem;
  background: var(--vp-c-warning-soft);
  border-bottom: 1px solid var(--vp-c-warning-2);
  color: var(--vp-c-warning-1);
  font-size: .78rem;
  text-align: center;
  line-height: 1.4;
}

.hyphi-nav-glow {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(192, 96, 255, 0.6),
    rgba(255, 80, 192, 0.4),
    rgba(192, 96, 255, 0.6),
    transparent
  );
  z-index: 999;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 80px;
    background: radial-gradient(
      ellipse at top,
      rgba(192, 96, 255, 0.12),
      transparent 70%
    );
    pointer-events: none;
  }
}
</style>
