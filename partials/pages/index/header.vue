<script lang="ts" setup>
import type Swal from 'sweetalert2';
const { $swal } = useNuxtApp()

/**
 * Alert before visiting my CV file.
 * 
 * @param {MouseEvent} event Handle the event when clicked
 * @returns void
 */
const onClickVisit = (event: MouseEvent) => {
  event.preventDefault();

  ($swal as Swal).fire({
    title: 'Informasi!',
    html: '<em>Curriculum Vitae</em> Saya ini hanya dapat diakses yang sudah memiliki akses (melalui undangan, konfirmasi atau persetujuan dari saya pribadi). Pastikan anda sudah memiliki izin kepada saya.',
    icon: 'info',
    confirmButtonText: 'Oke Lanjut'
  }).then(({ isConfirmed }) => {
    if(isConfirmed) {
      window.location.href = "https://drive.google.com/drive/folders/10jcIeNljmmXJYiKYHO58iM-xaAqmN9jE?usp=drive_link";
    } 
  });
}
</script>

<script lang="ts">
export default {
  name: 'HeaderHome',
};
</script>

<template>
  <header id="masthead">
    <div class="container">
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-7">
          <h2>Halo rek! 👋 Kenalin nih, namaku…</h2>
          <h1><u>A</u>mir Zuh<u>di</u> Wibowo</h1>
          <p class="subheading">Yang bisa dan biasa dipanggil <strong>Cak Adi</strong>.</p>

          <p class="desc">Fullstack website developer asli dari Bumi Kartonyono Medot Janji (Kabupaten Ngawi, Jawa Timur) yang suka ngulik soal teknologi dan suka jalan-jalan sendirian.</p>

          <div class="button-cta-group">
            <nuxt-link :to="{ name: 'contact-me' }" class="btn btn-lg btn-primary">Hubungi Saya</nuxt-link>
            <a href="#" @click="onClickVisit" class="btn btn-lg btn-link">Resume</a>
          </div>
        </div>
        <div class="col-md-5">
          <NuxtImg src="/images/fotoku.png" class="w-100" :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
#masthead {
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 2rem;

  .row {
    min-height: calc(100vh - 7rem);
    align-items: center;
    justify-content: center;
  }

  .button-cta-group {
    display: flex;
    justify-content: center;
    gap: .75rem;

    @media screen and (min-width: 992px) {
      justify-content: start;
    }
  }

  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 0;

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

    @media screen and (max-width: 992px) {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  u {
    color: var(--bs-primary);
    text-decoration-color: var(--bs-primary);
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