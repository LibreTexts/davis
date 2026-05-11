<script setup lang="ts">
import { computed, inject } from "vue";
import clsx from "clsx";
import { CommentStylesKey, CommentHasAvatarKey } from "./Comment.vue";

const props = defineProps<{
  class?: string;
}>();

const stylesRef = inject(CommentStylesKey);
const styles = computed(() => stylesRef?.value);
const hasAvatar = inject(CommentHasAvatarKey, undefined);
</script>

<template>
  <div v-if="styles" :class="clsx(styles.body(), hasAvatar && 'ml-11', props.class)">
    <slot />
  </div>
</template>
