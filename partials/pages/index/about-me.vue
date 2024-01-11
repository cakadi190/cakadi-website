<script setup lang="ts">
const techStack = ref([
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Javascript', icon: 'logos:javascript' },
  { name: 'NodeJS', icon: 'logos:nodejs-icon-alt' },
  { name: 'Typescript', icon: 'logos:typescript-icon' },
  { name: 'Kotlin', icon: 'logos:kotlin-icon' },
  { name: 'Flutter', icon: 'logos:flutter' },
  { name: 'NextJS', icon: 'logos:nextjs-icon' },
])
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutMeSectionHome',
});
</script>

<template>
  <section class="need-space">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <h3 class="sub-title">Tentang Saya</h3>
          <h2 class="main-title">Web Developer, Desainer Grafis, Android Apps Dev</h2>
        </div>
        <div class="col-md-4 d-none h-100 d-md-none d-lg-flex align-items-center justify-content-center">
          <div class="image-circular">
            <nuxt-img src="/images/pp.png" :placeholder="[50, 50, 75, 5]" densities="x1 x2" sizes="100vw sm:50vw md:400px" />

            <div class="icons-stack" v-for="(stack, index) in techStack" :key="index">
              <div class="inner-content" data-bs-toggle="tooltip" data-bs-placement="top" :title="stack.name">
                <Icon width="2rem" height="2rem" :name="stack.icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <p>Saya adalah seorang fullstack web developer, junior android developer dan desainer grafis yang berasal dari Ngawi, Jawa Timur. Saya memiliki pengalaman dalam membuat website dengan menggunakan teknologi Laravel, ReactJS, dan TailwindCSS. Saya juga memiliki pengalaman dalam membuat aplikasi android dengan menggunakan teknologi Kotlin dan Java. Saya juga memiliki pengalaman dalam membuat desain grafis dengan menggunakan aplikasi CorelDraw dan Adobe Illustrator.</p>
          
          <div class="button-cta-group">
            <nuxt-link :to="{ name: 'about-me' }" class="btn btn-lg btn-primary">Selengkapnya</nuxt-link>
            <nuxt-link :to="{ name: 'contact-me' }" class="btn btn-lg btn-link">Hubungi Saya</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sub-title {
  font-size: 1.875rem;
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  color: $primary;
  margin-bottom: 0;

  @include media-breakpoint-down(md) {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
}

.button-cta-group {
  display: flex;
  justify-content: flex-start;
  gap: .75rem;
}

.image-circular {
  position: relative;
  padding: 2rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: $border-radius-pill;
    padding: .5rem;
    background: $gray-200;
    width: 16rem;
    height: 16rem;
    margin: auto;


    @at-root [data-bs-theme=dark] & {
      background: $gray-700;
    }
  }


  .icons-stack {
    position: absolute;
    z-index: 1000;

    .inner-content {
      position: relative;
      background: $white;
      border-radius: $border-radius-pill;
      box-shadow: $box-shadow;
      border: 1px solid $gray-200;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .75rem;
      transition: all .2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.25);
      }

      @at-root [data-bs-theme=dark] & {
        background: $gray-800;
        border-color: $gray-700;
      }
    }

    &:nth-child(2) {
      top: 0;
      left: 0;
      margin: 1.75rem;
    }

    &:nth-child(3) {
      top: 0;
      right: 0;
      margin: 1.75rem;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 0;
      margin: 1.75rem;
    }

    &:nth-child(5) {
      bottom: 0;
      left: 0;
      margin: 1.75rem;
    }

    &:nth-child(6) {
      bottom: 0;
      top: 0;
      left: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: -.5rem;
    }

    &:nth-child(7) {
      bottom: 0;
      top: 0;
      right: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: -.5rem;
    }

    &:nth-child(8) {
      left: 0;
      top: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: -.5rem;
    }

    &:nth-child(9) {
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: -.5rem;
    }

    &:nth-child(n+6):nth-child(-n+9) {
      z-index: 999;
    }
  }
}
</style>