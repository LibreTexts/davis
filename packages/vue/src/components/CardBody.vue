<script setup lang="ts">
import { computed, inject } from "vue";
import clsx from "clsx";
import { CardStylesKey } from "./Card.vue";

const props = defineProps<{
  class?: string;
}>();

const stylesRef = inject(CardStylesKey);
const styles = computed(() => stylesRef?.value);
</script>

<template>
  <div v-if="styles" :class="clsx(styles.body(), props.class)">
    <slot />
  </div>
</template>
