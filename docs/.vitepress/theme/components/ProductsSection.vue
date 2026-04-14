<!-- docs/.vitepress/theme/components/ProductsSection.vue -->
<template lang="pug">
section.products-section
  h2.products-section__heading Products
  .products-grid
    a.product-card(
      v-for="product in products"
      :key="product.name"
      :href="product.link || undefined"
      :class="{ 'product-card--coming-soon': !product.link }"
      :target="product.link ? '_self' : undefined"
    )
      .product-card__icon {{ product.icon }}
      .product-card__body
        .product-card__name {{ product.name }}
        p.product-card__desc {{ product.details }}
      span.product-card__tag(v-if="!product.link") Coming Soon
      span.product-card__arrow(v-else) →
</template>

<script setup>
const products = [
  {
    icon: '🌸',
    name: 'GlowFlora',
    details: 'LED art hardware for festival, flow arts, and home — Clip, Home, and Go variants. Schematics, BOM, PCB fabrication, and build guides.',
    link: '/glowflora/',
  },
  {
    icon: '🌿',
    name: 'Smart Sprout',
    details: 'Coming soon.',
    link: null,
  },
  {
    icon: '🔵',
    name: 'Poi',
    details: 'Coming soon.',
    link: null,
  },
]
</script>

<style lang="scss" scoped>
.products-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 3rem 1.5rem 1rem;
}

.products-section__heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--hyphi-orange);
  margin: 0 0 1.25rem;
  border: none !important;

  &::after { display: none !important; }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.product-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--hyphi-border);
  border-radius: 6px;
  background: var(--hyphi-panel);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  color: inherit;

  &:not(.product-card--coming-soon):hover {
    border-color: rgba(255, 107, 53, 0.45);
    box-shadow: 0 0 24px rgba(123, 92, 250, 0.1);
    transform: translateY(-1px);
  }

  &--coming-soon {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  &__icon {
    font-size: 1.75rem;
    flex-shrink: 0;
    line-height: 1;
  }

  &__body {
    flex: 1;
    min-width: 0;
  }

  &__name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    letter-spacing: .1em;
    background: linear-gradient(to right, #7b5cfa, #ff6b35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
    margin-bottom: .2rem;
  }

  &__desc {
    font-family: 'DM Sans', sans-serif;
    font-size: .8rem;
    color: var(--hyphi-sub);
    margin: 0;
    line-height: 1.4;
  }

  &__arrow {
    font-size: 1rem;
    color: var(--hyphi-sub);
    flex-shrink: 0;
    transition: color 0.2s, transform 0.2s;
  }

  &:hover &__arrow {
    color: var(--hyphi-orange);
    transform: translateX(3px);
  }

  &__tag {
    font-family: 'DM Mono', monospace;
    font-size: .6rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--hyphi-sub);
    border: 1px solid rgba(122, 122, 154, 0.25);
    border-radius: 2px;
    padding: .2em .5em;
    flex-shrink: 0;
  }
}
</style>
