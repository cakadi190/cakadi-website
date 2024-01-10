<script setup lang="ts">
import PortofolioSection from '../../portofolio.vue';
</script>

<script lang="ts">
export default {
  name: 'PortofolioHomeSection',
};
</script>

<template>
  <section class="need-space">
    <div class="container">
      <h3>Portofolio Saya</h3>
      <p>Berikut beberapa portofolio saya yang sudah berhasil dipublikasikan.</p>
    </div>
    <div class="container">
      <PortofolioSection :limit="6" />
    </div>
  </section>
</template>