<script setup lang="ts">
import { FormSection, Input } from "@libretexts/davis-vue";
</script>

<template>
  <FormSection title="Personal Information" description="Tell us a bit about yourself.">
    <Input name="first-name" label="First name" />
    <Input name="last-name" label="Last name" />
    <Input name="email" label="Email address" type="email" />
  </FormSection>
</template>
