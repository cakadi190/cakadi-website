<script lang="ts" setup>
import { useDarkMode } from '@/stores/useDarkMode';

const darkModeStore = useDarkMode();
const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

interface ToggleDarkModeInterface {
  hideLabel?: boolean;
}

const props = withDefaults(defineProps<ToggleDarkModeInterface>(), {
  hideLabel: false,
});

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
});
</script>

<script lang="ts">
export default {
  name: 'DropdownDarkMode',
}
</script>

<template>
  <li class="nav-item darkmode-toggler">
    <a href="#" @click="toggleDarkMode" title="Press CTRL + SHIFT + D" class="nav-link">
      <Icon v-if="isDarkModeEnabled" name="solar:cloudy-moon-bold-duotone" />
      <Icon v-if="!isDarkModeEnabled" name="solar:sun-bold-duotone" />

      <span :class="{ 'd-none d-md-none d-lg-inline': !props.hideLabel, 'd-none': props.hideLabel }">Mode {{ !isDarkModeEnabled ? 'Terang' : 'Gelap' }}</span>
    </a>
  </li>
</template>

<style scoped lang="scss">
.darkmode-toggler {
  a {
    --bs-nav-link-padding-x: .5rem;
    --bs-navbar-nav-link-padding-y: 0;
    --bs-nav-link-color: var(--bs-dark);
    --bs-nav-link-hover-color: var(--bs-white);

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

    @media screen and (max-width: 992px) {
      font-size: 1rem;
      width: 2.5rem;
      height: 2.5rem;
    }

    @at-root [data-bs-theme=dark] & {
      --bs-nav-link-color: var(--bs-white);
      --bs-nav-link-hover-color: var(--bs-white);

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