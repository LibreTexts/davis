<script setup lang="ts">
import clsx from "clsx";
import { breadcrumb as breadcrumbVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    href?: string;
    isCurrent?: boolean;
    class?: string;
  }>(),
  {
    isCurrent: false,
  }
);

const { item, link, current, separator } = breadcrumbVariants();
</script>

<template>
  <li :class="clsx(item(), props.class)">
    <span v-if="props.isCurrent" aria-current="page" :class="current()">
      <slot />
    </span>
    <a v-else-if="props.href" :href="props.href" :class="link()">
      <slot />
    </a>
    <span v-else :class="link()"><slot /></span>
    <span v-if="!props.isCurrent" :class="separator()" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </span>
  </li>
</template>
