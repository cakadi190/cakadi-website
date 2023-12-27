<script lang="ts" setup>
import QuickCentreDarkMode from './quick-centre-darkmode.vue';
import QuickCentreClock from './quick-centre-clock.vue';
import QuickCentreVersion from './quick-centre-version.vue';
import QuickCentreGithub from './quick-centre-github.vue';

import { useDarkMode } from '@/stores/useDarkMode';

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
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="row main-row flex-column flex-md-row-reverse">
          <div class="col-md-4">
            <div class="grid-panel">
              <QuickCentreDarkMode />
              <QuickCentreClock />
              <QuickCentreVersion />
              <QuickCentreGithub />
            </div>
          </div>
          <div class="col-md-4 mt-auto">
            <h2 class="d-flex gap-3 align-items-center lh-1 mb-3">
              <Icon name="uil:keyboard" />
              <span>Shortcut</span>
            </h2>
            <p>Gunakan tombol jalan pintas navigasi dibawah untuk mempermudah penggunaan tombol aksi pada situs ini.</p>

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
.offcanvas {
  border: 0;
  backdrop-filter: blur(.25rem);
  background-color: rgba(var(--bs-white-rgb), .625) !important;
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
  grid-template-columns: repeat(2, 1fr); // 50% 50%
  gap: 1rem;

  .button-toggler {
    color: var(--bs-dark);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    border-radius: var(--bs-border-radius-lg);
    background: var(--bs-gray-200);

    @at-root [data-bs-theme=dark] & {
      background: var(--bs-gray-700);
      color: var(--bs-white);
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
    border-radius: var(--bs-border-radius);
    background: rgba(var(--bs-primary-rgb), .125);
    color: var(--bs-primary);
    min-height: 2rem;
    min-width: 2rem;

    --bs-nav-link-padding-x: .5rem;
    --bs-nav-link-padding-y: .25rem;
    --bs-navbar-nav-link-padding-x: .5rem;
    --bs-navbar-nav-link-padding-y: .25rem;

    kbd {
      background-color: var(--bs-primary);
    }

    &:hover {
      background: rgba(var(--bs-primary-rgb), .2);
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
</style>