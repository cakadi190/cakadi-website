<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Karir Saya',
  ogTitle: 'Karir Saya',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
});
</script>

<script lang="ts">
export default {
  name: 'MyCareer'
}
</script>

<template>
  <div></div>
</template>