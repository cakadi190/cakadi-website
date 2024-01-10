<script setup lang="ts">
useHead({
  title: 'Cak Adi Official Site',
  titleTemplate: (title) => {
    return title ? `${title} • Cak Adi Official Site` : 'Cak Adi Official Site';
  },
});
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoreApp',
})
</script>

<template>
  <div id="app-roots">
    <NuxtLoadingIndicator :height="4" :throttle="200" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
  transform: translateY(0);
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(2rem);
}
</style>