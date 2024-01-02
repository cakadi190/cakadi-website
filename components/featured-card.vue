<script setup lang="ts">
import { getTextColor } from '~/utils/color-utils';

interface FeaturedCardInterface {
  title?: string;
  description?: string;
  iconColor?: string;
}

let {
  title,
  description,
  iconColor
} = withDefaults(defineProps<FeaturedCardInterface>(), {
  title: "Hello world!",
  iconColor: '#333',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
});

let titleCard = computed(() => title);
let descriptionCard = computed(() => description);
let iconColorCard = computed(() => iconColor);
let iconColorTextCard = computed(() => getTextColor(iconColor))
</script>

<script lang="ts">
export default {
  name: 'FeaturedCardComponent',
};
</script>

<template>
  <div class="card-featured">
    <span class="line-decorate-horizontal" />
    <span class="line-decorate-vertical" />
    <div class="card-inner">
      <div class="title-inner">
        <div class="icon" :style="{ background: iconColorCard, color: iconColorTextCard }">
          <slot name="icon" />
        </div>
        <span class="title">{{ titleCard }}</span>
      </div>
      <div class="description">{{ descriptionCard }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-featured {
  border: 1px solid $gray-300;
  border-radius: $border-radius-xl;
  position: relative;

  @at-root [data-bs-theme=dark] & {
    border-color: $gray-700;
  }

  .description {
    padding: 1rem;
    padding-left: 3rem;
  }

  .line-decorate-horizontal,
  .line-decorate-vertical {
    position: absolute;
    z-index: -1;
  }

  .line-decorate-horizontal {
    width: 100%;
    border-top: 1px solid $gray-300;
    top: 2.25rem;
    bottom: 2rem;

    @at-root [data-bs-theme=dark] & {
      border-color: $gray-700;
    }
  }

  .line-decorate-vertical {
    height: 100%;
    border-left: 1px solid $gray-300;
    left: 2rem;
    right: 2rem;

    @at-root [data-bs-theme=dark] & {
      border-color: $gray-700;
    }
  }

  .title-inner {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: $border-radius-pill;
    background: $gray-200;
    font-weight: bold;

    @at-root [data-bs-theme=dark] & {
      background: $gray-700;
    }

    @at-root [data-bs-theme=dark] & {
      border-color: $gray-700;
    }

    .icon {
      padding: .875rem;
      flex-shrink: 0;
      margin-top: -0.25rem;
      margin-bottom: -0.25rem;
      margin-left: -0.5rem;
      border-radius: $border-radius-pill;
    }
  }
}
</style>