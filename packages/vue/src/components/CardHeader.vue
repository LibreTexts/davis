<script lang="ts">
export type CardImageProps = {
  src: string;
  alt: string;
  height?: string | number;
};
</script>

<script setup lang="ts">
import { inject } from "vue";
import clsx from "clsx";
import { CardStylesKey } from "./Card.vue";

const props = defineProps<{
  image?: CardImageProps;
  class?: string;
}>();

const styles = inject(CardStylesKey);
</script>

<template>
  <div v-if="styles" :class="clsx(styles.header(), props.class)">
    <img
      v-if="props.image"
      :src="props.image.src"
      :alt="props.image.alt"
      :class="styles.image()"
      :style="props.image.height ? { height: typeof props.image.height === 'number' ? `${props.image.height}px` : props.image.height } : undefined"
    />
    <div v-if="$slots.default" :class="styles.headerContent()">
      <slot />
    </div>
  </div>
</template>
