<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<script lang="ts">
export default {
  name: 'QuickCentreDarkMode',
};
</script>

<template>
  <div href="#" ref="toggleRef" data-bs-toggle="tooltip" title="App Version" data-bs-placement="bottom" class="button-toggler">
    <ClientOnly>
      <Icon class="h4" key="clockIcon" name="solar:history-bold" />
    </ClientOnly>
    <p key="darkModeText" class="mb-0 align-middle lh-1">{{ runtimeConfig.public.APP_VERSION ?? '1.0.0' }}</p>
  </div>
</template>
