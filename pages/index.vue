<script setup lang="ts">
import HeaderHome from '@/partials/pages/index/header.vue';
import FeaturedCardComponent from '@/partials/pages/index/featured.vue';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Beranda',
  ogTitle: 'Beranda',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
});

definePageMeta({
  layout: 'home'
});
</script>

<script lang="ts">
export default {
  name: 'IndexHomePage',
}
</script>

<template>
  <HeaderHome />
  <FeaturedCardComponent />
</template>

<style lang="scss" scoped>
.need-space {
  min-height: 50vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
