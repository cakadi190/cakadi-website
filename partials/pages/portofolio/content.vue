<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

withDefaults(defineProps<{ data?: Portofolio | null }>(), {
  data: undefined
});
</script>

<script lang="ts">
export default {
  name: 'PortofolioContent',
};
</script>

<template>
  <a :href="runtimeConfig.public.API_URL + '/storage/uploads/' + data?.image" :data-caption="data?.name" data-fancybox="gallery">
    <nuxt-img :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" class="w-100 mb-4 rounded-4 shadow" :src="runtimeConfig.public.API_URL + '/storage/uploads/' + data?.image" />
  </a>
  <h2>{{ data?.name }}</h2>

  <hr />

  <div class="mb-4">
    <h3 class="title">Ringkasan Proyek</h3>
    <p>{{ data?.highlight }}</p>
  </div>
  <div class="mb-4">
    <h3 class="title">Detail Proyek</h3>
    <p>{{ data?.description }}</p>
  </div>
</template>

<style scoped lang="scss">
h3.title {
  position: relative;
  margin-bottom: .5rem;
  padding-left: 1rem;

  &::before {
    content: '';
    height: 100%;
    left: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    width: 4px;
    background-color: $success;
    border-radius: $border-radius-pill;
  }
}
</style>