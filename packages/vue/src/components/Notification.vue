<script lang="ts">
export type NotificationVariant = "success" | "error" | "warning" | "info";
export type NotificationPosition = "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";

export type NotificationItem = {
  id: string;
  variant: NotificationVariant;
  message: string;
  title?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
};
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import clsx from "clsx";
import { notification as notificationVariants } from "@libretexts/davis-core";

const props = defineProps<{
  notification: NotificationItem;
}>();

const emit = defineEmits<{
  remove: [id: string];
}>();

const mounted = ref(false);
const closing = ref(false);

const styles = notificationVariants({ variant: props.notification.variant });

const VARIANT_ICONS: Record<NotificationVariant, string> = {
  success: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
  error: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",
  warning: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  info: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
};

let durationTimer: ReturnType<typeof setTimeout> | undefined;
let removeTimer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  requestAnimationFrame(() => { mounted.value = true; });
  const duration = props.notification.duration ?? 5000;
  if (duration > 0) {
    durationTimer = setTimeout(() => { closing.value = true; }, duration);
  }
});

watch(closing, (val) => {
  if (val) {
    removeTimer = setTimeout(() => emit("remove", props.notification.id), 300);
  }
});

onUnmounted(() => {
  if (durationTimer) clearTimeout(durationTimer);
  if (removeTimer) clearTimeout(removeTimer);
});

function dismiss() {
  closing.value = true;
}
</script>

<template>
  <div
    role="status"
    :class="clsx(
      styles.container(),
      'transition-all duration-300 ease-in-out',
      mounted && !closing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
    )"
  >
    <div :class="styles.body()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="styles.icon()" aria-hidden="true">
        <path fill-rule="evenodd" :d="VARIANT_ICONS[props.notification.variant]" clip-rule="evenodd" />
      </svg>
      <div :class="styles.content()">
        <p v-if="props.notification.title" :class="styles.title()">{{ props.notification.title }}</p>
        <p :class="clsx(styles.message(), props.notification.title && 'mt-0.5')">{{ props.notification.message }}</p>
        <div v-if="props.notification.action" :class="styles.action()">
          <button
            type="button"
            class="text-sm font-medium text-primary hover:underline focus:outline-none focus:underline"
            @click="() => { props.notification.action!.onClick(); dismiss(); }"
          >
            {{ props.notification.action.label }}
          </button>
        </div>
      </div>
      <button
        type="button"
        aria-label="Dismiss notification"
        :class="styles.closeBtn()"
        @click="dismiss"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4" aria-hidden="true">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
    </div>
  </div>
</template>
