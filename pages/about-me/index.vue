<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Tentang Saya',
  ogTitle: 'Tentang Saya',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
});
</script>

<script lang="ts">
export default {
  name: 'AboutMeIndex'
}
</script>

<template>
  <div class="pt-5 mt-5">Hello world!</div>
</template>