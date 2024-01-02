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
  if (['b', 'B'].includes(event.key) && window.scrollY > 100) {
    handleToTop();
  }
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100;
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
  <button @click="handleToTop" :class="['button', showBackToTop && 'show']">
    <Icon name="fa:chevron-up" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: fixed;
  bottom: 0;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius-pill $border-radius-pill 0 0;
  transition: all .2s;
  margin-bottom: -5rem;
  opacity: 0;
  visibility: hidden;
  background: $primary;
  z-index: $zindex-dropdown;

  &:hover {
    background: darken($primary, 10%);
  }
  
  &.show {
    visibility: visible;
    opacity: 1;
    margin-bottom: 0;
  }
}
</style>