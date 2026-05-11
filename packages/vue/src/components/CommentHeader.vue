<script lang="ts">
import type { AvatarSize } from "./Avatar.vue";

export type CommentAvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  initials?: string;
  size?: AvatarSize;
};
</script>

<script setup lang="ts">
import { computed, inject, watchEffect } from "vue";
import clsx from "clsx";
import { CommentStylesKey, CommentHasAvatarKey } from "./Comment.vue";
import Avatar from "./Avatar.vue";

const props = defineProps<{
  avatar?: CommentAvatarProps;
  name?: string;
  class?: string;
}>();

const stylesRef = inject(CommentStylesKey);
const styles = computed(() => stylesRef?.value);
const hasAvatar = inject(CommentHasAvatarKey);

watchEffect(() => {
  if (hasAvatar) {
    hasAvatar.value = props.avatar != null;
  }
});
</script>

<template>
  <div v-if="styles" :class="clsx(styles.header(), props.class)">
    <div v-if="props.avatar" :class="styles.avatar()">
      <Avatar
        size="sm"
        v-bind="{
          ...(props.avatar.src !== undefined ? { src: props.avatar.src } : {}),
          ...(props.avatar.alt !== undefined ? { alt: props.avatar.alt } : {}),
          ...(props.avatar.name !== undefined ? { name: props.avatar.name } : {}),
          ...(props.avatar.initials !== undefined ? { initials: props.avatar.initials } : {}),
        }"
      />
    </div>
    <div :class="styles.headerContent()">
      <div :class="styles.nameRow()">
        <span v-if="props.name" :class="styles.name()">{{ props.name }}</span>
        <div v-if="$slots.default" :class="styles.metadata()">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
