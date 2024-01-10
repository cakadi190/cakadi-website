<script setup lang="ts">
interface CardPortofolio {
  data?: Portofolio;
};

const config = useRuntimeConfig();

const props = withDefaults(
  defineProps<CardPortofolio>(),
  {
    data: undefined,
  }
);
</script>

<script lang="ts">
export default {
  name: 'CardPortofolioShow',
};
</script>

<template>
  <nuxt-link :to="{ name: 'portofolio-show', params: { show: props.data?.slug } }" class="card" :data-uuid="props.data?.id">
    <nuxt-img class="card-img-top" :src="`${$config.public.backendUrl}/storage/uploads/${props.data?.image}`" />

    <div class="card-body">
      <div class="d-flex gap-3 align-items-center">
        <div class="mb-0 h4 text-truncate">{{ props.data?.name }}</div>
        <span v-if="props.data?.category && Object.keys(props.data.category).length > 0" class="badge" :style="{background: props?.data?.category[0]?.background, color: getTextColor(props?.data?.category[0]?.background)}">
          {{ props?.data?.category[0]?.name ?? 'Uncategorized' }}
        </span>
      </div>
    </div>
    <div class="card-body pt-0">{{ props?.data?.highlight }}</div>
  </nuxt-link>
</template>

<style scoped lang="scss">
.card {
  box-shadow: none;
  transition: all .2s;
  overflow: hidden;
  border-radius: $border-radius-xl;
  height: 100%;

  &:hover {
    box-shadow: $box-shadow;
    border-color: $primary;
  }
}
</style>