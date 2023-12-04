<template>
  <div
    class="md:flex md:rounded-lg md:max-w-[57.5rem] md:h-[36.875rem] shadow-lg shadow-black bg-white text-dark mx-auto p-0 md:p-4"
  >
    <MultiStepFormStepper :step-index="multiStepFormStore.stepIndex" />
    <div
      class="flex flex-col md:px-20 px-7 pt-10 w-full justify-between bg-[#ebf4fb] md:bg-white"
    >
      <!-- Stepper Content 
      -->
      <div class="bg-white p-8 rounded-xl">
        <MultiStepFormPersonalInfo v-if="multiStepFormStore.stepIndex === 0" />
        <MultiStepFormSelectPlan v-if="multiStepFormStore.stepIndex === 1" />
        <!-- <MultiStepFormAddons /> -->
        <!-- <MultiStepFormSummary /> -->
        <!-- Stepper Content -->
      </div>
      <div class="flex w-full py-20 md:py-0 justify-between pb-3">
        <button
          v-if="multiStepFormStore.stepIndex !== 0"
          class="text-blue-900 select-none hover:text-blue-700 font-bold py-3 px-5 rounded-lg"
          @click="multiStepFormStore.cycleStepIndex('backward')"
        >
          Go Back
        </button>
        <button
          v-if="multiStepFormStore.stepIndex !== 3"
          class="bg-blue-900 select-none hover:bg-blue-700 text-white py-3 px-5 rounded-lg ml-auto"
          @click="multiStepFormStore.cycleStepIndex('forward')"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '@/store/multiStepForm'
const multiStepFormStore = useMultiStepForm()
</script>

<style scoped></style>
