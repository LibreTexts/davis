<script setup lang="ts">
import { InputGroup, Input } from "@libretexts/davis-vue";
</script>

<template>
  <InputGroup>
    <template #prefix>$</template>
    <Input name="amount" label="Amount" placeholder="0" />
    <template #suffix>.00</template>
  </InputGroup>
</template>
