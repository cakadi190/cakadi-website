<script lang="ts" setup>
import QuickCentreDarkMode from './quick-centre-darkmode.vue';
import QuickCentreClock from './quick-centre-clock.vue';
import QuickCentreVersion from './quick-centre-version.vue';
import QuickCentreGithub from './quick-centre-github.vue';

import { useDarkMode } from '@/stores/useDarkMode';
import QuickCentreNotify from './quick-centre-notify.vue';

const darkModeStore = useDarkMode();
const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

const toggleRef = ref();

/**
 * Handle keyboard press to trigger Quick Centre
 * 
 * @param {KeyboardEvent} event The keyboard event when pressed
 * @returns void
 */
const handleKeyPress = (event: KeyboardEvent) => {
  if (['q', 'Q'].includes(event.key)) {
    toggleRef.value?.click();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress);
});
</script>

<script lang="ts">
export default {
  name: 'QuickCentrePanel',
}
</script>

<template>
  <li class="nav-item">
    <a class="nav-link" ref="toggleRef" data-bs-toggle="offcanvas" href="#quickCentreOffcanvas" role="button" aria-controls="quickCentreOffcanvas">
      <Icon name="lucide:check-square" />
      <span class="d-none d-md-none d-lg-inline-flex gap-1 align-items-center">
        Quick Center
        <kbd>Q</kbd>
      </span>
    </a>
  </li>
    
  <Teleport to="body">
    <div class="offcanvas offcanvas-start" tabindex="-1" id="quickCentreOffcanvas" aria-labelledby="quickCentreOffcanvasLabel">
      <div class="offcanvas-header align-items-center">
        <app-logo />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div class="offcanvas-body">
        <div class="row main-row flex-column flex-md-row-reverse">
          <div class="col-md-4 qc-left">
            <div class="grid-panel">
              <QuickCentreDarkMode />
              <QuickCentreClock />
              <QuickCentreVersion />
              <QuickCentreGithub />
            </div>

            <QuickCentreNotify class="pt-4 h-100" />
          </div>
          <div class="col-md-4 mt-auto d-none d-md-none d-lg-inline">
            <ClientOnly>
              <h2 class="d-flex gap-3 align-items-center lh-1 mb-3">
                <Icon name="uil:keyboard" />
                <span>Shortcut</span>
              </h2>
            </ClientOnly>
            <p>Gunakan tombol jalan pintas navigasi dibawah untuk mempermudah penggunaan tombol aksi pada situs ini. Gunakan tombol ini ketika anda tidak menaruh kursor pada sebuah inputan.</p>

            <table class="table bg-transparent">
              <tbody>
                <tr>
                  <td class="bg-transparent">Buka Quick Access</td>
                  <td class="bg-transparent text-end" width="35%"><kbd>Q</kbd></td>
                </tr>
                <tr>
                  <td class="bg-transparent">Tutup Quick Access</td>
                  <td class="bg-transparent text-end" width="35%"><kbd>Q</kbd> atau <kbd>Esc</kbd></td>
                </tr>
                <tr>
                  <td class="bg-transparent">Ubah Tema (Gelap / Terang)</td>
                  <td class="bg-transparent text-end" width="35%"><kbd>D</kbd></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.qc-left {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
  overflow: auto;
}

.offcanvas {
  border: 0;
  backdrop-filter: blur(.25rem);
  background-color: rgba(var(--bs-white-rgb), .825) !important;
  min-width: 100%;
  
  @at-root [data-bs-theme=dark] & {
    background-color: rgba(var(--bs-dark-rgb), .625) !important;
  }
}

.main-row {
  min-height: calc(100vh - 96px);
  justify-content: space-between;
}

.grid-panel {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - .5rem)); // 50% 50%
  gap: 1rem;

  .button-toggler {
    color: var(--bs-dark);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: .5rem;
    padding: 1rem;
    border-radius: $border-radius-lg;
    background: var(--bs-gray-100);
    transition: all .2s;
    
    &.on {
      background: var(--bs-gray-200);
    }
    
    @at-root [data-bs-theme=dark] & {
      background: var(--bs-gray-900);
      color: var(--bs-white);

      &.on {
        background: var(--bs-gray-700);
      }
    }
  }
}

.nav-item {
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .325rem;
    font-size: .875rem;
    border-radius: $border-radius-lg;
    background: rgba($primary, .125);
    color: $primary;
    min-height: 2rem;
    min-width: 2rem;
    border: 1px solid rgba($primary, .25);

    --bs-nav-link-padding-x: .625rem;
    --bs-nav-link-padding-y: .25rem;
    --bs-navbar-nav-link-padding-x: .5rem;
    --bs-navbar-nav-link-padding-y: .25rem;

    kbd {
      background-color: $primary;
    }

    &:hover {
      background: rgba($primary, .2);
    }

    @media screen and (max-width: 768px) {
    --bs-nav-link-padding-x: .75rem;
    --bs-nav-link-padding-y: .75rem;
    --bs-navbar-nav-link-padding-x: .75rem;
    --bs-navbar-nav-link-padding-y: .75rem;

      font-size: 1rem;
    }
  }
}
</style>