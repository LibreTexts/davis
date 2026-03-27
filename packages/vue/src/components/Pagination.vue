<script lang="ts">
export type PaginationSize = "sm" | "md" | "lg";
</script>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { pagination as paginationVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    page: number;
    totalPages: number;
    siblings?: number;
    size?: PaginationSize;
    class?: string;
  }>(),
  {
    siblings: 1,
    size: "md",
  }
);

const emit = defineEmits<{
  change: [page: number];
}>();

function getPageNumbers(page: number, totalPages: number, siblings: number): (number | "ellipsis")[] {
  const delta = siblings;
  const range: number[] = [];

  for (let i = Math.max(2, page - delta); i <= Math.min(totalPages - 1, page + delta); i++) {
    range.push(i);
  }

  if (page - delta > 2) range.unshift(-1);
  if (page + delta < totalPages - 1) range.push(-2);

  const pages: (number | "ellipsis")[] = [1];
  for (const r of range) {
    if (r < 0) pages.push("ellipsis");
    else pages.push(r);
  }
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

const pages = computed(() => getPageNumbers(props.page, props.totalPages, props.siblings));
const styles = paginationVariants({ size: props.size });
</script>

<template>
  <nav v-if="props.totalPages > 1" aria-label="Pagination" :class="clsx(styles.root(), props.class)">
    <ul :class="styles.list()">
      <!-- Previous -->
      <li>
        <button
          type="button"
          :disabled="props.page <= 1"
          aria-label="Go to previous page"
          :class="styles.button()"
          @click="emit('change', props.page - 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </button>
      </li>

      <!-- Pages -->
      <template v-for="(p, i) in pages" :key="p === 'ellipsis' ? `ellipsis-${i}` : p">
        <li v-if="p === 'ellipsis'">
          <span :class="styles.ellipsis()" aria-hidden="true">…</span>
        </li>
        <li v-else>
          <button
            type="button"
            :aria-label="`Go to page ${p}`"
            :aria-current="p === props.page ? 'page' : undefined"
            :class="clsx(styles.button(), p === props.page && styles.current())"
            @click="emit('change', p as number)"
          >
            {{ p }}
          </button>
        </li>
      </template>

      <!-- Next -->
      <li>
        <button
          type="button"
          :disabled="props.page >= props.totalPages"
          aria-label="Go to next page"
          :class="styles.button()"
          @click="emit('change', props.page + 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>
