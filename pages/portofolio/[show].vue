<script setup lang="ts">
import PortofolioSidebar from '~/partials/pages/portofolio/sidebar.vue';
import PortofolioContent from '~/partials/pages/portofolio/content.vue';
import PortofolioGallery from '~/partials/pages/portofolio/gallery.vue';

const route = useRoute()
const runtimeConfig = useRuntimeConfig();

let url = `/v1/portofolio/${route.params.show}`

const { data } = await useLarafetch<Portofolio>(url, {
  transform: (_porto) => (_porto as DefaultResponse<Portofolio>).data as Portofolio,
});

const computedTitle = computed(() => data?.value?.name);
const computedDesc = computed(() => data?.value?.highlight);
const computedImage = computed(() => data?.value?.gallery && Object.keys(data?.value?.gallery ?? {}).length > 0 ? `${runtimeConfig.public.API_URL}/storage/uploads/${data?.value?.gallery[0]?.image}` : `${runtimeConfig.public.APP_URL}/images/og-image.jpg`);

useSeoMeta({
  title: computedTitle.value,
  ogTitle: () => computedTitle.value,
  description: () => computedDesc.value,
  ogDescription: () => computedDesc.value,
  ogUrl: () => `${runtimeConfig.public.APP_URL}${route.fullPath}`,
  ogImage: () => computedImage.value,
  twitterImage: () => computedImage.value,
});
</script>

<template>
  <div :id="data?.id">
    <header id="masthead">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Portofolio Saya</h3>

              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link href="/" class="breadcrumb-link">Beranda</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                  <nuxt-link href="/portofolio" class="breadcrumb-link">Portofolio</nuxt-link>
                </li>
                <li class="breadcrumb-item text-truncate">
                  <div class="breadcrumb-link active">{{ data?.name }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <portofolio-content :data="data" />
            <portofolio-gallery :data="data" />
          </div>
          <div class="col-md-4">
            <portofolio-sidebar :data="data" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
#masthead {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  .inner {
    padding-top: 8rem;
    padding-bottom: 12rem;
    margin-bottom: -10rem;
    background: linear-gradient(to bottom, transparent 50%, $body-bg 100%);

    @at-root [data-bs-theme=dark] & {
      background: linear-gradient(to bottom, transparent 50%, $body-bg-dark 100%);
    }
  }

  @at-root [data-bs-theme=dark] & {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.075)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  }

}
</style>