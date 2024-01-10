<script setup lang="ts">
import navbarHome from '@/partials/navbar-home.vue';
import BackTop from '@/components/back-top.vue';
import FooterHome from '@/partials/footer-home.vue';
</script>

<template>
  <div id="home-main-layout">
    <div id="home-wrapper">
      <navbar-home />
      <div id="layout-home">
        <slot />
      </div>
      <footer-home class="mt-auto" />
    </div>

    <back-top />
  </div>
</template>

<style lang="scss" scoped>
#home-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>