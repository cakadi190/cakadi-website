<script lang="ts">
export default {
  name: 'CardLoaderComponent',
}
</script>

<template>
  <div class="card rounded-4 overflow-hidden shadow placeholder-glow">
    <span class="card-img-top placeholder" style="height: 120px" />

    <div class="card-body">
      <div class="d-flex gap-2 mb-3 justify-content-between align-items-center">
        <div class="placeholder rounded-pill" style="height: 1.325rem;width: 65%;" />
        <div class="placeholder rounded-pill" style="height: .75rem;width: 25%;" />
      </div>

      <p class="placeholder rounded-pill mb-1" style="height: 1rem;width: 100%;" />
      <p class="placeholder rounded-pill mb-1" style="height: 1rem;width: 90%;" />
      <p class="placeholder rounded-pill mb-1" style="height: 1rem;width: 75%;" />
    </div>
    <div class="card-body">
      <div class="d-flex gap-2">
        <span class="placeholder rounded-pill" v-for="item in 4" :key="item" style="height: 2rem;width: 2rem;" />
      </div>
    </div>
  </div>
</template>