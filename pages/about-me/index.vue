<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const darkModeStore = useDarkMode();

const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

useSeoMeta({
  title: 'Tentang Saya',
  ogTitle: 'Tentang Saya',
  description: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogDescription: 'Halo rek! Kenalin nih Adi yang mana adalah seorang website developer asal Bumi Kartonyono.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  ogUrl: runtimeConfig.public.APP_URL,
});

const techStackList = [
  { icon: 'logos:nuxt-icon', name: 'Nuxt' },
  { icon: 'logos:vue', name: 'Vue' },
  { icon: 'logos:bootstrap', name: 'Bootstrap' },
  { icon: 'cib:wordpress', name: 'WordPress', supportDark: true },
  { icon: 'cib:laravel', name: 'Laravel', supportDark: true },
  { type: 'separator' },
  { icon: 'logos:visual-studio-code', name: 'Visual Studio Code' },
  { icon: 'logos:figma', name: 'Figma' },
  { icon: 'logos:adobe-illustrator', name: 'Adobe Illustrator' },
];
</script>

<script lang="ts">
export default {
  name: 'AboutMeIndex'
}
</script>

<template>
  <div id="about-page">
    
    <header id="masthead">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Tentang Saya</h3>

              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link href="/" class="breadcrumb-link">Beranda</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                  <span class="breadcrumb-link active">Tentang Saya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="container pb-3">
        <h3>Tentang <span class="text-success">Amir Zuhdi Wibowo</span></h3>
      </div>
      <div class="container pb-5">
        <nuxt-img src="/images/pp.png" class="figure-main-profile" :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" />
        <article>
          <p>Halo rek! Kenalin nih, saya Amir Zuhdi Wibowo atau biasa dan bisa dikenal sebagai Cak Adi. Saya adalah seorang website developer dan juga desainer grafis. Saya sudah belajar lumayan lama tentang web developer dan desain grafis, namun baru menekuninya sejak SMA 2019 yang lalu. Dan sekarang sudah menempati posisi sebagai Fullstack Web Developer di salah satu perusahaan yang sedang saya dirintis.</p>
          <p>Dan alhamdulillah, sudah banyak asam garam yang dimakan serta aksi jungkir balik dalam belajar website development dan juga di bidang IT. Dan untuk saat ini saya masih memperbanyak pengalaman dan juga menaikkan softskill dan hardskill saya sendiri untuk menunjang keberlangsungan karir saya di bidang IT.</p>
          <p>Nah, di situs resmi pribadi saya akan menuliskan dan berbagi sedikit kisah hidup, pengalaman hingga berbagai perkakas yang sudah saya gunakan dan berguna dalam mengembangkan potensi saya sebagai web developer dan desainer grafis secara gratis dan dapat diakses semua orang.</p>

          <blockquote class="text-center pt-5">
            <p style="font-family: 'Amiri', 'Times New Roman';font-size: 2em">خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ</p>
            <cite>"Sebaik-baik manusia adalah yang paling bermanfaat untuk orang lain."<br />(HR. Ahmad, ath-Thabrani, ad-Daruqutni. Hadits ini dihasankan oleh al-Albani di dalam Shahihul Jami’, No. 3289)</cite>
          </blockquote>
        </article>
      </div>
      <div class="container pb-5">
        <h3 class="mb-3">Tech Stack Andalan Saya</h3>

        <div class="stack-list">
          <template v-for="(stack, index) in techStackList" :key="index">
            <div v-if="stack.type !== 'separator'" data-bs-toggle="tooltip" data-bs-placement="top" :title="stack.name">
              <Icon :class="(stack.supportDark && isDarkModeEnabled) && 'text-white'" :name="stack.icon ?? 'material-symbols:indeterminate-question-box-rounded'" />
            </div>
            <div v-else class="vr mx-2" />
          </template>
        </div>
      </div>
      <div class="container pb-5">
        <div class="row">
          <div class="col-md-9">
            <h3>Ingin Terhubung?</h3>
            <p>Mau terhubung dengan saya untuk bertanya terkait hal teknis, konsultasi tentang IT atau yang lainnya? Boleh <strong>PAKE BANGEEETTT</strong>, malah saya siap untuk menjawab pertanyaan kamu, terutama soal web development atau IT. (Untuk kontak saya, bisa cek di <nuxt-link :to="{ name: 'contact-me' }">halaman ini</nuxt-link>).</p>
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

.figure-main-profile {
  float: right;
  border-radius: $border-radius-xl;
  margin-left: 1rem;
  margin-bottom: 1rem;
  width: 25%;

  @include media-breakpoint-down(md) {
    width: 50%;
  }
}

.stack-list {
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > * {
    font-size: 3rem;
  }

  @media screen and (max-width: 992px) {
    gap: .5rem;

    >* {
      font-size: 1.5rem;
    }
  }
}
</style>