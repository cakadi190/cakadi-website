<script setup lang="ts">
import HeaderHome from '@/partials/pages/index/header.vue';
import FeaturedCardComponent from '@/partials/pages/index/featured.vue';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Beranda',
  ogTitle: 'Beranda',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: '/images/og-image.jp',
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
  twitterTitle: 'Beranda',
  twitterDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  twitterImage: '/images/og-image.jpg'
});

const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'id'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ],
  meta: [
    { property: 'og:title', content: `${route.meta.title} • Cak Adi Official Site` },
    { property: 'twitter:title', content: `${route.meta.title} • Cak Adi Official Site` },
  ]
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
