<script setup lang="ts">
const layout = ref();

useHead({
  titleTemplate: (title) => {
    return title ? `${title} • Cak Adi` : 'Cak Adi';
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
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>