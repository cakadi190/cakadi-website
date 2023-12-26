<script lang="ts" setup>
import { useDarkMode } from '@/stores/useDarkMode';
import Swal from 'sweetalert2';

const darkModeStore = useDarkMode();
const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

/**
 * Handles the keydown event and checks for the Ctrl + Shift + D combination.
 *
 * @param {KeyboardEvent} event - The keyboard event object.
 */
const handleKeyDown = (event: KeyboardEvent) => {
  event.preventDefault();

  if (event.ctrlKey && event.shiftKey) {
    if (event.key === 'D') { darkModeStore.toggleDarkMode(); }
    else if (event.key === 'R') { window.location.reload(); }
    else if (event.key === 'I') {
      Swal.fire({
        icon: 'error',
        title: 'Maaf! Aksi Dibekukan!',
        text: 'Maaf, aksi tersebut tidak dapat dilakukan. Karena dilarang oleh administrator situs!',
      });
    } else {
      console.log('Ctrl + Shift + ' + event.key + ' pressed');
    }
  }
};

/**
 * Attaches the keydown event listener when the component is mounted.
 */
const attachEventListener = () => {
  window.addEventListener('keydown', handleKeyDown);
};

/**
 * Detaches the keydown event listener when the component is unmounted.
 */
const detachEventListener = () => {
  window.removeEventListener('keydown', handleKeyDown);
};

/**
 * Toggles the dark mode.
 *
 * @param {MouseEvent} event - The mouse event triggering the toggle.
 * @returns {void}
 */
const toggleDarkMode = (event: MouseEvent): void => {
  event.preventDefault();
  darkModeStore.toggleDarkMode();
};

onMounted(() => {
  darkModeStore.initializeDarkMode();
  attachEventListener();
});

onUnmounted(() => {
  detachEventListener();
});
</script>

<script lang="ts">
export default {
  name: 'DropdownDarkMode',
}
</script>

<template>
  <li class="nav-item darkmode-toggler">
    <a href="#" @click="toggleDarkMode" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Press CTRL + SHIFT + D" class="nav-link">
      <Icon v-if="isDarkModeEnabled" name="solar:cloudy-moon-bold-duotone" />
      <Icon v-if="!isDarkModeEnabled" name="solar:sun-bold-duotone" />

      <span class="d-none d-md-none d-lg-inline">Mode Gelap</span>
    </a>
  </li>
</template>

<style scoped lang="scss">
.darkmode-toggler {
  a {
    --bs-navbar-nav-link-padding-x: .5rem;
    --bs-navbar-nav-link-padding-y: 0;

    font-size: .875rem;
    border: 1px solid rgba(var(--bs-dark-rgb), .075);
    background: rgba(var(--bs-dark-rgb), .075);
    border-radius: var(--bs-border-radius-lg);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    gap: .25rem;

    &:hover {
      background: var(--bs-gray-400);
      color: var(--bs-dark);
      border-color: var(--bs-gray-400);
    }

    &:focus-visible {
      box-shadow: 0 0 0 0.25rem rgba(var(--bs-secondary-rgb), 0.125);
    }

    @media screen and (max-width: 768px) {
      --bs-nav-link-padding-x: .25rem;
      font-size: 1rem;
      width: 2.5rem;
      height: 2.5rem;
    }

    @at-root [data-bs-theme=dark] & {
      border-color: rgba(var(--bs-white-rgb), .125);
      background: rgba(var(--bs-white-rgb), .125);

      &:hover {
        background: var(--bs-white);
        color: var(--bs-dark);
        border-color: var(--bs-white);
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(var(--bs-white-rgb), 0.125);
      }
    }
  }
}
</style>