<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<script lang="ts">
export default {
  name: 'QuickCentreDarkMode',
};
</script>

<template>
  <div href="#" ref="toggleRef" data-bs-toggle="tooltip" :title="runtimeConfig.public.APP_VERSION ?? '1.0.0'" data-bs-placement="bottom" class="button-toggler">
    <ClientOnly>
      <Icon class="h4" key="clockIcon" name="simple-icons:nuxtdotjs" />
    </ClientOnly>
    <p key="darkModeText" class="lh-1 mb-0 align-middle text-truncate">App Version: {{ runtimeConfig.public.APP_VERSION ?? '1.0.0' }}</p>
  </div>
</template>
