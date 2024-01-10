<script setup lang="ts">
const props = withDefaults(defineProps<{ data?: Portofolio | null }>(), {
  data: undefined
});
</script>

<script lang="ts">
export default {
  name: 'PortofolioSidebar',
};
</script>

<template>
  <aside class="sidebar">
    <div class="card table-responsive">
      <div class="wrap">
        <div class="title">Nama Proyek</div>
        <div class="desc">{{ data?.name }}</div>
      </div>
      <div class="wrap">
        <div class="title">Terpublikasi Pada</div>
        <div class="desc">{{ $dayjs(data?.published_at).format('DD MMMM YYYY') }}</div>
      </div>
      <div class="wrap">
        <div class="title">Klien</div>
        <div class="desc">{{ data?.clientName }}</div>
      </div>
      <div class="wrap">
        <div class="title">Link</div>
        <div class="desc">
          <a v-if="data?.link" :href="data?.link" target="_blank" rel="noopener noreferrer">{{ data?.link }}</a>
          <span v-else>-</span>
        </div>
      </div>
    </div>
    <div v-if="data?.category" class="d-flex flex-wrap gap-2 pb-4">
      <span v-for="(item, index) in data?.category" :key="index" v-if="data?.category && Object.keys(data.category).length > 0" class="badge" :style="{background: item?.background, color: getTextColor(item?.background)}">
        {{ item?.name ?? 'Uncategorized' }}
      </span>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  position: sticky;
  top: 5rem;
}

.card {
  border-radius: $border-radius-xl;
  box-shadow: $box-shadow;
  padding: 1.25rem;
  margin-bottom: 1.5rem;

  .wrap {
    border-bottom: 1px solid $card-border-color;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    .title {
      margin-bottom: 0.25rem;
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-color: transparent;
    }
  }
}
</style>