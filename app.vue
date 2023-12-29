<script setup lang="ts">
const layout = ref();

useHead({
  title: 'Cak Adi Official Site',
  titleTemplate: (title) => {
    return title ? `${title} • Cak Adi Official Site` : 'Cak Adi Official Site';
  },
});
</script>

<template>
  <NuxtLoadingIndicator :height="4" :throttle="0" />
  <NuxtLayout ref="layout" />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>