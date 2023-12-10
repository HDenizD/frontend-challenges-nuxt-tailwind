<template>
  <div
    class="md:flex md:rounded-lg md:max-w-[59rem] md:h-[36.875rem] md:shadow-lg shadow-black bg-white text-dark mx-auto p-0 md:p-4"
  >
    <MultiStepFormStepper :step-index="multiStepFormStore.stepIndex" />
    <div
      class="inline-flex flex-col md:mx-20 w-full justify-between bg-[#ebf4fb] md:bg-white md:h-auto"
    >
      <!-- Stepper Content -->
      <div class="bg-white p-8 my-5 mx-5 -top-20 relative md:static rounded-xl">
        <MultiStepFormPersonalInfo v-if="multiStepFormStore.stepIndex === 0" />
        <MultiStepFormSelectPlan v-if="multiStepFormStore.stepIndex === 1" />
        <MultiStepFormPickAddons v-if="multiStepFormStore.stepIndex === 2" />
        <!-- <MultiStepFormSummary /> -->
        <!-- Stepper Content -->
      </div>
      <div
        class="flex fixed md:static w-full bottom-0 md:py-0 justify-between p-4 bg-white md:shadow-none shadow-md shadow-black"
      >
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

function detectTailwindMobileAndChangeBgColor() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (isMobile) {
    const mainElement = document.querySelector('body')
    if (mainElement) {
      mainElement.style.backgroundColor = '#ebf4fb'
    }
  }
}

onMounted(() => {
  detectTailwindMobileAndChangeBgColor()
})
</script>

<style></style>
