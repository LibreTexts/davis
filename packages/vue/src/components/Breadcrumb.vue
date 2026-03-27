<script setup lang="ts">
import clsx from "clsx";
import { breadcrumb as breadcrumbVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    ariaLabel: "Breadcrumb",
  }
);

const { root, list } = breadcrumbVariants();
</script>

<template>
  <nav :aria-label="props.ariaLabel" :class="clsx(root(), props.class)">
    <ol :class="list()">
      <slot />
    </ol>
  </nav>
</template>
