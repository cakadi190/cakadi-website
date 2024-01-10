<script setup lang="ts">
import errorState from '~/components/error-state.vue';

const runtimeConfig = useRuntimeConfig();

withDefaults(defineProps<{ data?: Portofolio | null }>(), {
  data: undefined
});
</script>

<script lang="ts">
export default {
  name: 'PortofolioGallery',
};
</script>

<template>
  <div class="border-top py-4">
    <h3 v-if="Object.keys(data?.gallery ?? {}).length > 0">Galeri</h3>
    <error-state v-if="Object.keys(data?.gallery ?? {}).length === 0" title="Maaf, Tidak Ada Galeri Yang Dapat Ditampilkan!" message="Maaf ya, di portofolio ini tidak terdapat galeri yang dapat ditampilkan" />
    <div class="row" v-else>
      <div class="col-6 col-md-4" v-for="(item, index) in data?.gallery" :key="index">
        <a :href="runtimeConfig.public.API_URL + '/storage/uploads/' + item?.image" data-fancybox="gallery" :data-caption="item?.name">
          <nuxt-img :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" class="w-100 mb-4 rounded-3 shadow" :src="runtimeConfig.public.API_URL + '/storage/uploads/' + item?.image" />
        </a>
      </div>
    </div>
  </div>
</template>