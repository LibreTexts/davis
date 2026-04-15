<script setup lang="ts">
import { MenuItems } from "@headlessui/vue";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import clsx from "clsx";
import { menu as menuVariants } from "@libretexts/davis-core";
import { inject, onMounted, ref, type Ref } from "vue";

type MenuAlign = "left" | "right";
type MenuWidth = "auto" | "sm" | "md" | "lg" | "full";

const props = withDefaults(
  defineProps<{
    align?: MenuAlign;
    width?: MenuWidth;
    class?: string;
  }>(),
  {
    align: "left",
    width: "auto",
  }
);

const { items } = menuVariants({ align: props.align, width: props.width });

const triggerEl = inject<Ref<HTMLElement | null>>('davis:triggerEl');
const floatingEl = ref<{ $el: HTMLElement } | null>(null);
const floatingStyle = ref<Record<string, string>>({ position: 'fixed', top: '0px', left: '0px' });

onMounted(async () => {
  const reference = triggerEl?.value;
  const floating = floatingEl.value?.$el;
  if (!reference || !floating) return;

  const placement = props.align === 'right' ? 'bottom-end' : 'bottom-start';
  const { x, y } = await computePosition(reference, floating, {
    placement,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });
  floatingStyle.value = { position: 'fixed', top: `${y}px`, left: `${x}px` };
});
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <MenuItems ref="floatingEl" :style="floatingStyle" :class="clsx(items(), props.class)">
        <slot />
      </MenuItems>
    </transition>
  </Teleport>
</template>
