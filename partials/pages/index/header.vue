<script lang="ts" setup>
// Fill it here
</script>

<script lang="ts">
export default {
  name: 'HeaderHome',
};
</script>

<template>
  <header id="masthead">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h2>Halo rek! 👋 Kenalin nih, namaku…</h2>
          <h1><u>A</u>mir Zuh<u>di</u> Wibowo</h1>
          <p class="subheading">Yang bisa dan biasa dipanggil <strong>Cak Adi</strong>.</p>

          <p class="desc">Fullstack website developer asli dari Bumi Kartonyono Medot Janji (Kabupaten Ngawi, Jawa Timur) yang suka ngulik soal teknologi dan suka jalan-jalan sendirian.</p>

          <div class="button-cta-group">
            <a href="#" class="btn btn-lg btn-primary">Hubungi Saya</a>
            <a href="#" class="btn btn-lg btn-link">Resume</a>
          </div>
        </div>
        <div class="col-md-5"></div>
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