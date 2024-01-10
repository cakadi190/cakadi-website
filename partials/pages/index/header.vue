<script lang="ts" setup>
import type { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

const { $swal } = useNuxtApp();
const darkModeStore = useDarkMode();

const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

/**
 * Alert before visiting my CV file.
 * 
 * @param {MouseEvent} event Handle the event when clicked
 * @returns void
 */
const onClickVisit = (event: MouseEvent) => {
  event.preventDefault();

  $swal.fire({
    title: 'Informasi!',
    html: '<em>Curriculum Vitae</em> Saya ini hanya dapat diakses yang sudah memiliki akses (melalui undangan, konfirmasi atau persetujuan dari saya pribadi). Pastikan anda sudah memiliki izin kepada saya.',
    icon: 'info',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'Batal',
    confirmButtonText: 'Oke Lanjut'
  } as SweetAlertOptions).then(({ isConfirmed }: SweetAlertResult) => {
    if (isConfirmed) window.location.href = "https://drive.google.com/drive/folders/10jcIeNljmmXJYiKYHO58iM-xaAqmN9jE?usp=drive_link";
  });
};

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
  name: 'HeaderHome',
};
</script>

<template>
  <header id="masthead">
    <div class="inner">
      <div class="container">
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-lg-7 col-xxl-6 content">
            <div class="content-main">
              <h2>Halo rek! 👋 Kenalin nih, namaku…</h2>
              <h1><u>A</u>mir Zuh<u>di</u> Wibowo</h1>
              <p class="subheading">Yang bisa dan biasa dipanggil <strong>Cak Adi</strong>.</p>

              <p class="desc">Fullstack website developer asli dari Bumi Kartonyono Medot Janji (Kabupaten Ngawi, Jawa Timur) yang suka ngulik soal teknologi dan suka jalan-jalan sendirian.</p>

              <div class="button-cta-group">
                <nuxt-link :to="{ name: 'contact-me' }" class="btn btn-lg btn-primary">Hubungi Saya</nuxt-link>
                <a href="#" @click="onClickVisit" class="btn btn-lg btn-link">Resume</a>
              </div>
            </div>
            
            <div class="text-center text-md-start mt-5 mt-md-2 mt-lg-0">
              <p class="mb-2 mb-md-1">Tech Stack Andalan</p>
              <div class="stack-list">
                <template v-for="(stack, index) in techStackList" :key="index">
                  <div v-if="stack.type !== 'separator'" data-bs-toggle="tooltip" data-bs-placement="top" :title="stack.name">
                    <Icon width="2rem" :class="(stack.supportDark && isDarkModeEnabled) && 'text-white'" height="2rem" :name="stack.icon ?? 'material-symbols:indeterminate-question-box-rounded'" />
                  </div>
                  <div v-else class="vr mx-2" />
                </template>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xxl-6">
            <nuxt-img src="/images/fotoku.png" class="w-100" :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.content {
  @media screen and (min-width: 992px) {
    min-height: calc(100dvh - 7rem);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: stretch;
    justify-content: space-between;
  }

  .content-main {
    margin-top: auto;
    margin-bottom: auto;
  }
}

.stack-list {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 992px) {
    gap: .5rem;
    justify-content: center;
  }
}

#masthead {
  min-height: 100dvh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

  @at-root [data-bs-theme=dark] & {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.075)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  }

  .inner {
    padding-top: 5rem;
    padding-bottom: 2rem;
    background: linear-gradient(to bottom, transparent 50%, $body-bg 100%);

    @at-root [data-bs-theme=dark] & {
      background: linear-gradient(to bottom, transparent 50%, $body-bg-dark 100%);
    }
  }

  .row {
    min-height: calc(100dvh - 7rem);
    align-items: center;
    justify-content: center;
  }

  .button-cta-group {
    display: flex;
    justify-content: center;
    gap: .75rem;

    @media screen and (min-width: 992px) {
      justify-content: flex-start;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 0;

    @media screen and (max-width: 1600px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 992px) {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  .subheading {
    opacity: .75;

    @media screen and (max-width: 992px) {
      text-align: center;
    }
  }

  h2 {
    font-size: 1.875rem;
    font-weight: normal;

    @media screen and (max-width: 1600px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 992px) {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  u {
    color: $primary;
    text-decoration-color: $primary;
  }

  .desc {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
}
</style>