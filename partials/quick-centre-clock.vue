<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const time = ref(getCurrentTime());

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}.${minutes}.${seconds}`;
}

onMounted(() => {
  setInterval(() => {
    time.value = getCurrentTime();
  }, 1000);
});
</script>

<script lang="ts">
export default {
  name: 'QuickCentreClock',
};
</script>

<template>
  <div ref="toggleRef" class="button-toggler">
    <ClientOnly>
      <Icon class="h4" key="clockIcon" name="solar:clock-circle-bold" />
      <p key="darkModeText" class="lh-1 mb-0 align-middle text-truncate">{{ time ?? '00.00.00' }} WIB</p>
    </ClientOnly>
  </div>
</template>
