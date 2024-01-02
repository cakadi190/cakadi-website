<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showBackToTop = ref(false);

const handleToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'B' && window.scrollY > 200) {
    handleToTop();
  }
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 200;
}

// Add scroll and keypress event listeners when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keypress', handleKeyPress);
});

// Remove the event listeners when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keypress', handleKeyPress);
});
</script>

<script lang="ts">
export default {
  name: 'BackTop',
}
</script>

<template>
  <button v-if="showBackToTop" @click="handleToTop" class="button">Back to Top</button>
</template>