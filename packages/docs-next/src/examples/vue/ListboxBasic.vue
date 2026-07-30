<script setup lang="ts">
import { ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@libretexts/davis-vue";

const FRAMEWORKS = ["React", "Vue", "Angular", "Svelte", "Solid"];
const selected = ref<string | null>(null);
</script>

<template>
  <div class="w-64">
    <Listbox v-model="selected">
      <ListboxLabel>Framework</ListboxLabel>
      <ListboxButton placeholder="Select a framework…" />
      <ListboxOptions>
        <ListboxOption v-for="f in FRAMEWORKS" :key="f" :value="f">
          {{ f }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
