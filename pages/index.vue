<script setup lang="ts">
import HeaderHome from '@/partials/pages/index/header.vue';
import FeaturedCardComponent from '@/partials/pages/index/featured.vue';
import AboutMeSectionHome from '@/partials/pages/index/about-me.vue';
import PortofolioHomeSection from '@/partials/pages/index/portofolio.vue';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Beranda',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: `${runtimeConfig.public.APP_URL}/images/og-image.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
  twitterDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  twitterImage: `${runtimeConfig.public.APP_URL}/images/og-image.jpg`
});

useHead({
  htmlAttrs: {
    lang: 'id'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ],
  meta: [
    { property: 'og:title', content: `Beranda • Cak Adi Official Site` },
    { property: 'twitter:title', content: `Beranda • Cak Adi Official Site` },
  ]
});
</script>

<script lang="ts">
export default {
  name: 'IndexHomePage',
}
</script>

<template>
  <div id="home-index">
    <header-home />
    <featured-card-component />
    <about-me-section-home />
    <portofolio-home-section />
  </div>
</template>

<style lang="scss" scoped>
.need-space {
  min-height: 50vh;
  padding-top: 5rem;
  padding-bottom: 5rem;

  &-sm {
    min-height: 25vh;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}
</style>
