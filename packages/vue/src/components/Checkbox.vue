<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import clsx from "clsx";

type CheckboxSize = "sm" | "md" | "lg";
let nextCheckboxId = 0;

const props = withDefaults(
  defineProps<{
    id?: string;
    name: string;
    label?: string;
    modelValue?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    size?: CheckboxSize;
    description?: string;
    class?: string;
    labelClass?: string;
  }>(),
  {
    defaultChecked: false,
    indeterminate: false,
    disabled: false,
    required: false,
    error: false,
    size: "md",
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const fallbackId = `davis-checkbox-${++nextCheckboxId}`;
const inputId = computed(() => props.id || `${props.name}-${fallbackId}`);
const descriptionId = computed(() =>
  props.description ? `${inputId.value}-description` : undefined
);

const isControlled = computed(() => props.modelValue !== undefined);
const internalChecked = ref(props.defaultChecked);
const checked = computed({
  get() {
    return isControlled.value ? props.modelValue! : internalChecked.value;
  },
  set(value: boolean) {
    if (!isControlled.value) internalChecked.value = value;
    emit("update:modelValue", value);
  },
});

const inputRef = ref<HTMLInputElement | null>(null);

function syncIndeterminate() {
  if (inputRef.value) inputRef.value.indeterminate = props.indeterminate;
}

onMounted(syncIndeterminate);
watch(() => props.indeterminate, syncIndeterminate);

const sizeClasses: Record<CheckboxSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
};

const checkIconSize: Record<CheckboxSize, string> = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
};
</script>

<template>
  <label
    :class="
      clsx(
        'flex gap-x-3',
        props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        props.class
      )
    "
  >
    <div class="flex shrink-0 items-center h-6">
      <!-- Container for the custom checkbox -->
      <div class="relative" :class="sizeClasses[props.size]">
        <!-- Native input styled as custom checkbox via appearance-none -->
        <input
          ref="inputRef"
          type="checkbox"
          :id="inputId"
          :name="props.name"
          v-model="checked"
          :disabled="props.disabled"
          :required="props.required"
          :aria-describedby="descriptionId"
          :class="clsx(
            'appearance-none absolute inset-0 w-full h-full rounded border m-0',
            props.disabled
              ? 'cursor-not-allowed border-gray-300 bg-gray-100'
              : props.error
                ? 'cursor-pointer border-danger bg-red-50'
                : (checked || props.indeterminate)
                  ? 'cursor-pointer border-primary bg-primary'
                  : 'cursor-pointer border-gray-300 bg-white'
          )"
        />
        <!-- Check / indeterminate icon overlay (pointer-events-none) -->
        <svg
          fill="none"
          viewBox="0 0 14 14"
          :class="clsx(
            'absolute inset-0 z-10 m-auto pointer-events-none stroke-white',
            props.disabled && 'stroke-gray-950/25',
            checkIconSize[props.size],
            props.error && 'stroke-danger'
          )"
        >
          <path
            d="M3 8L6 11L11 3.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="checked && !props.indeterminate ? 'opacity-100' : 'opacity-0'"
          />
          <path
            d="M3 7H11"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="props.indeterminate ? 'opacity-100' : 'opacity-0'"
          />
        </svg>
      </div>
    </div>
    <div v-if="props.label || props.description" class="text-sm/6">
      <span
        v-if="props.label"
        :class="clsx(
          'font-medium text-gray-700',
          props.error && 'text-danger',
          props.labelClass
        )"
      >
        {{ props.label }}
        <span v-if="props.required" class="text-danger ml-0.5">*</span>
      </span>
      <p
        v-if="props.description"
        :id="descriptionId"
        :class="clsx('text-gray-500', props.disabled && 'opacity-50')"
      >
        {{ props.description }}
      </p>
    </div>
  </label>
</template>
