<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, Radio } from "@libretexts/davis-vue";

const value = ref("pro");
</script>

<template>
  <RadioGroup name="plan" label="Select a plan" v-model="value">
    <Radio value="starter" label="Starter" description="Best for personal use" />
    <Radio value="pro" label="Pro" description="Best for small teams" />
    <Radio value="enterprise" label="Enterprise" description="Best for large organizations" />
  </RadioGroup>
</template>
