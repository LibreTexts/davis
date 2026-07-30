<script setup lang="ts">
import { ref } from "vue";
import { NumberInput } from "@libretexts/davis-vue";

const value = ref(5);
</script>

<template>
  <NumberInput name="quantity" label="Quantity" v-model="value" :min="0" :max="100" />
</template>
