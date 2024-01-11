<script setup lang="ts">
const year = new Date().getFullYear();

const socialMediaLinks = [
  { link: "https://www.facebook.com/cakadi190", icon: 'fa6-brands:facebook' },
  { link: "https://www.twitter.com/cakadi190", icon: 'fa6-brands:twitter' },
  { link: "https://www.figma.com/@cakadi190", icon: 'fa6-brands:figma' },
  { link: "https://www.instagram.com/cakadi190", icon: 'fa6-brands:instagram' },
  { link: "https://www.linkedin.com/in/cakadi190", icon: 'fa6-brands:linkedin' },
];

const gabutLinks = [
  { name: 'about-me', label: 'Tentang Saya' },
  { name: 'about-me-education', label: 'Pendidikan Saya' },
  { name: 'about-me-achievement', label: 'Penghargaan Saya' },
  { name: 'about-me-career', label: 'Karir Saya' },
  { isExternal: true, url: 'https://dasakreativa.web.id', label: 'Layanan Saya' },
  { name: 'portofolio', label: 'Portofolio Saya' },
];

const resourcesLinks = [
  { isExternal: true, url: 'https://catatancakadi.web.id', label: 'Blog Pribadi' },
  { name: 'gist', label: 'Contekan Kode' },
  { name: 'resources-coffee-space', label: 'Tempat Ngopi' },
  { name: 'resources-learn-coding', label: 'Belajar Ngoding' },
];

const othersLinks = [
  { name: 'credit', label: 'Kredit' },
  { isExternal: true, url: 'https://trakteer.id/cakadi190', label: 'Donasi ke trakteer.id' },
  { isExternal: true, url: 'https://ko-fi.com/cakadi190', label: 'Donasi ke ko-fi.com' },
  { isExternal: true, url: '#', label: 'Kasih Feedback dong' },
];
</script>

<script lang="ts">
import AppLogo from '@/components/app-logo.vue';

export default {
  name: 'FooterHome',
};
</script>

<template>
  <footer id="footer-main" class="footer">
    <div class="inner">
      <div class="container">
        <div class="row">
          <div class="mb-4 mb-md-0 col-md-6">
            <nuxt-link to="/" class="d-block mb-2">
              <app-logo height="64px" width="200" />
            </nuxt-link>

            <p>Saya adalah seorang fullstack developer yang suka sekali dengan desain dan juga tertarik di dunia teknologi. Saya adalah orang kelahiran Klaten, Jawa Tengah dan berdomisili di Ngawi, Jawa Timur.</p>

            <div class="social-links pb-4">
              <a :href="link.link" v-for="link in socialMediaLinks" :key="link.link" target="_blank" rel="noopener noreferrer" class="social-link">
                <Icon :name="link.icon" />
              </a>
            </div>

            <p class="mb-0">Hak Cipta 2003-{{ year ?? 2003 }} <nuxt-link to="/">Catatan Cak Adi</nuxt-link>.</p>
          </div>
          <div class="mb-4 mb-md-0 col-md-2 col-6">
            <h6 class="fw-bold mb-3">Kegabutan</h6>

            <ul class="list-unstyled d-flex flex-column gap-2">
              <li v-for="(links, index) in gabutLinks" :key="index">
                <a v-if="links.isExternal" :href="links.url" target="_blank" rel="noopener noreferrer">{{ links.label }}</a>
                <nuxt-link v-else :to="{ name: links.name }">{{ links.label }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="mb-4 mb-md-0 col-md-2 col-6">
            <h6 class="fw-bold mb-3">Sumber Daya</h6>

            <ul class="list-unstyled d-flex flex-column gap-2">
              <li v-for="(links, index) in resourcesLinks" :key="index">
                <a v-if="links.isExternal" :href="links.url" target="_blank" rel="noopener noreferrer">{{ links.label }}</a>
                <nuxt-link v-else :to="{ name: links.name }">{{ links.label }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h6 class="fw-bold mb-3">Lain-Lain</h6>

            <ul class="list-unstyled d-flex flex-column gap-2">
              <li v-for="(links, index) in othersLinks" :key="index">
                <a v-if="links.isExternal" :href="links.url" target="_blank" rel="noopener noreferrer">{{ links.label }}</a>
                <nuxt-link v-else :to="{ name: links.name }">{{ links.label }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.5)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

  @at-root [data-bs-theme=dark] & {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.075)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  }

  .inner {
    padding: 4rem 0 3rem 0;
    background: linear-gradient(to top, transparent 25%, $body-bg 100%);

    @at-root [data-bs-theme=dark] & {
      background: linear-gradient(to top, transparent 25%, $body-bg-dark 100%);
    }
  }

  .list-unstyled {
    a {
      color: $dark;
      
      @at-root [data-bs-theme=dark] & {
        color: $white;
      }
    }
  }
}

.social-links {
  display: flex;
  align-items: center;
  gap: 1rem;

  > * {
    color: $dark;
    font-size: 1.25em;
    transition: all .2s;
    
    @at-root [data-bs-theme=dark] & {
      color: $white;
    }

    &:hover {
      opacity: .75;
    }
  }
}
</style>