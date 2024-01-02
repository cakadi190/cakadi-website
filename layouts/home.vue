<script setup lang="ts">
import navbarHome from '@/partials/navbar-home.vue';
import BackTop from '@/components/back-top.vue';
</script>

<template>
  <div id="layout-home">
    <navbar-home />
    <slot />

    <back-top />
  </div>
</template>