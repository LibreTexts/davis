<script lang="ts">
import type { ComputedRef, InjectionKey, Ref } from "vue";
import { comment as commentVariants } from "@libretexts/davis-core";
export type CommentVariant = "default" | "highlighted";
export type CommentPadding = "none" | "sm" | "md" | "lg";
export type CommentStyles = ReturnType<typeof commentVariants>;
export const CommentStylesKey: InjectionKey<ComputedRef<CommentStyles>> = Symbol("CommentStyles");
export const CommentHasAvatarKey: InjectionKey<Ref<boolean>> = Symbol("CommentHasAvatar");
</script>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import clsx from "clsx";

const props = withDefaults(
  defineProps<{
    variant?: CommentVariant;
    padding?: CommentPadding;
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    variant: "default",
    padding: "md",
  }
);

const styles = computed(() => commentVariants({ variant: props.variant, padding: props.padding }));
const hasAvatar = ref(false);

provide(CommentStylesKey, styles);
provide(CommentHasAvatarKey, hasAvatar);
</script>

<template>
  <article :aria-label="props.ariaLabel" :class="clsx(styles.root(), props.class)">
    <slot />
  </article>
</template>
