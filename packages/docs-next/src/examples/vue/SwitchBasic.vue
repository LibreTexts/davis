<script setup lang="ts">
import { ref } from "vue";
import { Switch } from "@libretexts/davis-vue";

const checked = ref(true);
</script>

<template>
  <Switch label="Enable notifications" v-model="checked" />
</template>
