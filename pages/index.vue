<script setup lang="ts">
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
  <div>Hello world</div>
</template>
