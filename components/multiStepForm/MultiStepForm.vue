<template>
  <div
    class="md:flex md:rounded-lg md:max-w-[59rem] md:h-[36.875rem] md:shadow-lg shadow-black bg-white text-dark mx-auto p-0 md:p-4"
  >
    <MultiStepFormStepper :step-index="multiStepFormStore.stepIndex" />
    <div
      class="flex flex-col md:mx-20 w-full justify-between bg-[#ebf4fb] md:bg-white md:h-auto"
    >
      {{ $t('multiStepForm.welcome') }}
      <!-- Stepper Content -->
      <div
        v-if="!orderConfirmed"
        class="bg-white p-8 my-5 md:mx-0 mx-5 -top-20 relative md:static rounded-xl"
      >
        <MultiStepFormPersonalInfo v-if="multiStepFormStore.stepIndex === 0" />
        <MultiStepFormSelectPlan v-if="multiStepFormStore.stepIndex === 1" />
        <MultiStepFormPickAddons v-if="multiStepFormStore.stepIndex === 2" />
        <MultiStepFormSummaryDetails
          v-if="multiStepFormStore.stepIndex === 3"
        />
        <!-- Stepper Content -->
      </div>
      <MultiStepFormPostConfirm v-else />
      <div
        class="flex fixed md:static w-full bottom-0 md:py-0 justify-between p-4 md:mb-3 shadow-black"
        :class="orderConfirmed ? 'bg-[#ebf4fb]' : 'bg-white'"
      >
        <button
          v-if="multiStepFormStore.stepIndex !== 0 && !orderConfirmed"
          class="text-blue-900 w-32 select-none hover:text-blue-700 font-bold py-3 px-5 rounded-lg"
          @click="multiStepFormStore.cycleStepIndex('backward')"
        >
          Go Back
        </button>
        <button
          v-if="multiStepFormStore.stepIndex !== 3 && !orderConfirmed"
          class="bg-blue-900 w-32 select-none hover:bg-blue-700 text-white py-3 px-5 rounded-lg ml-auto"
          @click="multiStepFormStore.cycleStepIndex('forward')"
        >
          Next Step
        </button>
        <button
          v-if="multiStepFormStore.stepIndex === 3 && !orderConfirmed"
          class="bg-indigo-600 w-32 select-none hover:bg-blue-700 text-white py-3 px-5 rounded-lg ml-auto"
          @click="orderConfirmed = true"
        >
          Confirm
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

const orderConfirmed = ref(false)

onMounted(() => {
  detectTailwindMobileAndChangeBgColor()
})
</script>

<style></style>
