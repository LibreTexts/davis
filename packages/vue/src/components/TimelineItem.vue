<script lang="ts">
export type TimelineStatus = "complete" | "current" | "pending";
</script>

<script setup lang="ts">
import clsx from "clsx";
import { timeline as timelineVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    timestamp?: string;
    status?: TimelineStatus;
    class?: string;
  }>(),
  {
    status: "pending",
  }
);

const styles = timelineVariants({ status: props.status });
</script>

<template>
  <li :class="clsx(styles.item(), props.class)">
    <div :class="styles.connector()" aria-hidden="true" />
    <div :class="styles.indicator()" aria-hidden="true">
      <slot name="icon">
        <!-- Check icon for complete -->
        <svg v-if="props.status === 'complete'" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4">
          <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
        </svg>
        <!-- Dot icon for current/pending -->
        <svg v-else viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="size-4">
          <circle cx="8" cy="8" r="3" />
        </svg>
      </slot>
    </div>
    <div :class="styles.content()">
      <p :class="styles.title()">{{ props.title }}</p>
      <p v-if="props.description !== undefined" :class="styles.description()">{{ props.description }}</p>
      <time v-if="props.timestamp !== undefined" :class="styles.timestamp()">{{ props.timestamp }}</time>
    </div>
  </li>
</template>
