<!-- docs/.vitepress/theme/components/HyphiLayout.vue -->
<template lang="pug">
DefaultTheme
  template(#layout-top)
    .hyphi-nav-glow(aria-hidden="true")
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<style lang="scss">
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
