<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxLabel,
  ComboboxInputField,
  ComboboxOptionsList,
  ComboboxOptionItem,
  ComboboxEmpty,
} from "@libretexts/davis-vue";

const FRUITS = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Strawberry"];
const selected = ref<string | null>(null);
const query = ref("");
const filtered = computed(() =>
  query.value === ""
    ? FRUITS
    : FRUITS.filter((f) => f.toLowerCase().includes(query.value.toLowerCase())),
);
</script>

<template>
  <div class="w-64">
    <Combobox v-model="selected">
      <ComboboxLabel>Fruit</ComboboxLabel>
      <ComboboxInputField
        placeholder="Search fruits..."
        :display-value="(v) => v ?? ''"
        @change="query = ($event.target as HTMLInputElement).value"
      />
      <ComboboxOptionsList>
        <ComboboxEmpty v-if="filtered.length === 0" />
        <ComboboxOptionItem v-for="fruit in filtered" :key="fruit" :value="fruit">
          {{ fruit }}
        </ComboboxOptionItem>
      </ComboboxOptionsList>
    </Combobox>
  </div>
</template>
