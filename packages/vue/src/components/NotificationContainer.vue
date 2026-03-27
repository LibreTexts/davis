<script setup lang="ts">
import clsx from "clsx";
import Notification from "./Notification.vue";
import type { NotificationItem, NotificationPosition } from "./Notification.vue";

const POSITION_CLASSES: Record<NotificationPosition, string> = {
  "top-right":     "top-4 right-4 flex-col items-end",
  "top-center":    "top-4 left-1/2 -translate-x-1/2 flex-col items-center",
  "top-left":      "top-4 left-4 flex-col items-start",
  "bottom-right":  "bottom-4 right-4 flex-col-reverse items-end",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse items-center",
  "bottom-left":   "bottom-4 left-4 flex-col-reverse items-start",
};

const props = withDefaults(
  defineProps<{
    notifications: NotificationItem[];
    position?: NotificationPosition;
  }>(),
  {
    position: "top-right",
  }
);

const emit = defineEmits<{
  remove: [id: string];
}>();
</script>

<template>
  <div
    aria-live="polite"
    aria-atomic="false"
    :class="clsx('fixed z-[9999] flex gap-3 pointer-events-none', POSITION_CLASSES[props.position])"
  >
    <Notification
      v-for="n in props.notifications"
      :key="n.id"
      :notification="n"
      @remove="emit('remove', $event)"
    />
  </div>
</template>
