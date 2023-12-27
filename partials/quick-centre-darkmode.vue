<script lang="ts" setup>
import { useDarkMode } from '@/stores/useDarkMode';

const darkModeStore = useDarkMode();
const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);
const toggleRef = ref();

const handleKeyPress = (event: KeyboardEvent) => {
  if (['d', 'D'].includes(event.key)) {
    toggleRef.value?.click();
  }
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
  window.addEventListener('keydown', handleKeyPress);
  darkModeStore.initializeDarkMode();
});
</script>

<script lang="ts">
export default {
  name: 'QuickCentreDarkMode',
};
</script>

<template>
  <a href="#" ref="toggleRef" @click="toggleDarkMode" :class="{'button-toggler': true, 'on': isDarkModeEnabled}">
    <ClientOnly>
      <Icon class="h4" v-if="isDarkModeEnabled" key="darkModeIconMoon" name="solar:moon-stars-bold" />
      <Icon class="h4" v-else key="darkModeIconSun" name="solar:sun-bold" />
    </ClientOnly>
    <p key="darkModeText" class="lh-1 mb-0 align-middle text-truncate">Dark Mode: {{ isDarkModeEnabled ? 'On' : 'Off' }}</p>
  </a>
</template>
