<script setup lang="ts">
import PortofolioSection from '@/partials/portofolio.vue';

const router = useRoute();
const pageQueryParam = ref(router.query.page);

const pageNumber = ref(
  Array.isArray(pageQueryParam.value)
    ? 1
    : pageQueryParam.value
      ? parseInt(pageQueryParam.value, 10)
      : 1
);

watch(() => router.query.page, (newPageQueryParam) => {
  pageQueryParam.value = newPageQueryParam;
  pageNumber.value = Array.isArray(newPageQueryParam)
    ? 1
    : newPageQueryParam
      ? parseInt(newPageQueryParam, 10)
      : 1;
});

useSeoMeta({
  title: 'Portofolio Saya',
  ogTitle: 'Portofolio Saya',
  description: 'Halo rek, ini dia daftar portofolio saya. Monggo dilihat dan juga jangan lupa kasih tanggapan kalian ya!',
  ogDescription: 'Halo rek, ini dia daftar portofolio saya. Monggo dilihat dan juga jangan lupa kasih tanggapan kalian ya!',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<script lang="ts">
export default {
  name: 'MyCareer'
}
</script>

<template>
  <div id="portofolio-page">
    <header id="masthead">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Portofolio Saya</h3>
              <p>Beberapa portofolio yang saya publikasi, sudah saya selesaikan dan kerjakan akhir-akhir ini.</p>

              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link href="/" class="breadcrumb-link">Beranda</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                  <span class="breadcrumb-link active">Portofolio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="container mb-5">
        <PortofolioSection :page="pageNumber" />
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