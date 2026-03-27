<script lang="ts">
export type StepperOrientation = "horizontal" | "vertical";
export type StepperSize = "sm" | "md" | "lg";

export type StepItem = {
  label: string;
  description?: string;
};
</script>

<script setup lang="ts">
import clsx from "clsx";
import { stepper as stepperVariants } from "@libretexts/davis-core";

const props = withDefaults(
  defineProps<{
    steps: StepItem[];
    currentStep: number;
    orientation?: StepperOrientation;
    size?: StepperSize;
    class?: string;
  }>(),
  {
    orientation: "horizontal",
    size: "md",
  }
);

type StepStatus = "complete" | "current" | "upcoming";

function getStatus(index: number): StepStatus {
  if (index < props.currentStep) return "complete";
  if (index === props.currentStep) return "current";
  return "upcoming";
}

function getStepClasses(index: number) {
  const status = getStatus(index);
  return stepperVariants({ orientation: props.orientation, size: props.size, status });
}

const rootStyles = stepperVariants({ orientation: props.orientation, size: props.size });
</script>

<template>
  <nav aria-label="Progress" :class="clsx(rootStyles.root(), props.class)">
    <ol :class="rootStyles.root()">
      <template v-for="(step, index) in props.steps" :key="index">
        <li
          :class="getStepClasses(index).step()"
          :aria-current="getStatus(index) === 'current' ? 'step' : undefined"
        >
          <!-- Horizontal connector -->
          <div
            v-if="index < props.steps.length - 1 && props.orientation === 'horizontal'"
            aria-hidden="true"
            :class="getStepClasses(index).connector()"
          />
          <div :class="getStepClasses(index).circle()">
            <svg
              v-if="getStatus(index) === 'complete'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-4"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div :class="getStepClasses(index).stepContent()">
            <span :class="getStepClasses(index).label()">{{ step.label }}</span>
            <span v-if="step.description" :class="getStepClasses(index).description()">{{ step.description }}</span>
          </div>
        </li>
        <!-- Vertical connector -->
        <li
          v-if="index < props.steps.length - 1 && props.orientation === 'vertical'"
          aria-hidden="true"
          :class="getStepClasses(index).connector()"
        />
      </template>
    </ol>
  </nav>
</template>
