<script lang="ts">
import type { InjectionKey } from "vue";

type Politeness = "polite" | "assertive";
export type AnnounceFunction = (message: string, politeness?: Politeness) => void;
export const LiveAnnouncerKey: InjectionKey<AnnounceFunction> = Symbol("LiveAnnouncer");
</script>

<script setup lang="ts">
import { ref, provide } from "vue";

const politeMessage = ref("");
const assertiveMessage = ref("");
let clearTimer: ReturnType<typeof setTimeout> | undefined;

function announce(message: string, politeness: "polite" | "assertive" = "polite") {
  if (politeness === "assertive") {
    assertiveMessage.value = "";
  } else {
    politeMessage.value = "";
  }

  if (clearTimer) clearTimeout(clearTimer);

  requestAnimationFrame(() => {
    if (politeness === "assertive") {
      assertiveMessage.value = message;
    } else {
      politeMessage.value = message;
    }
  });

  clearTimer = setTimeout(() => {
    politeMessage.value = "";
    assertiveMessage.value = "";
  }, 7000);
}

provide(LiveAnnouncerKey, announce);
</script>

<template>
  <slot />
  <div
    style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0"
  >
    <div role="status" aria-live="polite" aria-atomic="true">{{ politeMessage }}</div>
    <div role="alert" aria-live="assertive" aria-atomic="true">{{ assertiveMessage }}</div>
  </div>
</template>
