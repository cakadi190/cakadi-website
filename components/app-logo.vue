<script lang="ts" setup>
import ImageLogoColor from '@/assets/images/brands/logo-color.svg';
import ImageLogoDark from '@/assets/images/brands/logo-white.svg';

import { useDarkMode } from '@/stores/useDarkMode';

interface LogoInterface {
  height?: number | string;
  width?: number | string;
};

const darkModeStore = useDarkMode();
const isDarkModeEnabled: ComputedRef<boolean> = computed(() => darkModeStore.getIsDarkMode);

const props = withDefaults(
  defineProps<LogoInterface>(), 
  {
    height: 32,
    width: 147.59,
  }
);
</script>

<template>
  <ImageLogoColor v-if="!isDarkModeEnabled" :fontControlled="false" :width="props.width" :height="props.height" />
  <ImageLogoDark v-else :fontControlled="false" :width="props.width" :height="props.height" />
</template>