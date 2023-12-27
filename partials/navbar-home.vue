<script lang="ts" setup>
import QuickCentre from './quick-centre.vue';

const buttonToggleRef = ref();

const onclickhandler = (event: MouseEvent) => {
  event.preventDefault();
  if(window.innerWidth <= 768) buttonToggleRef.value?.click();
};

const navMenu: NavMenu[] = [
  { label: 'Beranda', route: 'index' },
  { label: 'Tentang', route: 'about-me' },
  { label: 'Pendidikan', route: 'about-me-education' },
  { label: 'Portfolio', route: 'portofolio' },
  { label: 'Penghargaan', route: 'about-me-achievement' },
  { label: 'Karir', route: 'about-me-career' },
  { label: 'Hubungi', route: 'contact-me' },
];
</script>

<script lang="ts">
export default {
  name: 'NavbarHome',
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top" aria-label="Offcanvas navbar large">
    <div class="container-lg">
      <button ref="buttonToggleRef" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-home" aria-controls="navbar-home" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nuxt-link class="navbar-brand" :to="{ name: 'index' }">
        <app-logo />
      </nuxt-link>

      <div class="nav">
        <QuickCentre />
      </div>

      <div class="offcanvas offcanvas-start text-bg-white" tabindex="-1" id="navbar-home" aria-labelledby="navbar-homeLabel">
        <div class="offcanvas-header">
          <nuxt-link class="navbar-brand" @click="onclickhandler" :to="{ name: 'index' }">
            <app-logo />
          </nuxt-link>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav gap-1 gap-md-0 align-items-xl-center justify-content-end flex-grow-1 pe-0 pe-lg-3">
            <li class="nav-item nav-main" v-for="menu in navMenu" :key="menu.label">
              <nuxt-link class="nav-link" @click="onclickhandler" active-class="active" aria-current="page" :to="{ name: menu.route }">{{ menu.label }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-toggler {

  &,
  &:focus,
  &:focus-within,
  &:active {
    padding: 0;
    border: 0;
    outline: 0;
  }
}

.nav-main {
  .nav-link {
    position: relative;
    color: var(--bs-dark);

    @at-root [data-bs-theme=dark] & {
      color: var(--bs-white);
    }

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      left: 0;
      width: 0;
      border-radius: var(--bs-border-radius-lg);
      height: .25rem;
      background: var(--bs-primary);
      margin: 0 auto;
      transition: all .2s;
    }

    &:hover,
    &.active {
      color: var(--bs-primary);
    }
    
    &:hover::after {
      width: 35%;
    }

    @media screen and (max-width: 992px) {
      --bs-nav-link-padding-y: .5rem;
      --bs-nav-link-padding-x: 1rem;

      border-radius: var(--bs-border-radius-lg);

      &:hover::after {
        width: 0;
      }

      &:hover {
        color: var(--bs-primary);
        background: rgba(var(--bs-primary-rgb), .25);
      }
      
      &.active, &:focus {
        color: var(--bs-white);
        background: var(--bs-primary);
      }
    }
  }
}</style>