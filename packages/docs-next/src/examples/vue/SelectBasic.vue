<script setup lang="ts">
import { Select } from "@libretexts/davis-vue";

const options = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "uk", label: "United Kingdom" },
];
</script>

<template>
  <Select
    name="country"
    label="Country"
    placeholder="Select a country"
    :options="options"
  />
</template>
