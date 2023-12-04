<template>
  <div
    class="flex rounded-lg max-w-[57.5rem] h-[36.875rem] shadow-lg shadow-black bg-white text-dark mx-auto p-4"
  >
    <MultiStepFormStepper :step-index="stepIndex" />
    <div class="flex flex-col mx-20 pt-10 w-full justify-between">
      <!-- Stepper Content -->
      <div>
        <MultiStepFormPersonalInfo
          v-if="stepIndex === 0"
          v-model:personalInfo="personalInfo"
          :force-validation="isTriggeredValidation"
          @is-valid="validationCheck.personalInfo = $event"
        />
        <MultiStepFormSelectPlan v-if="stepIndex === 1" />
        <!-- <MultiStepFormAddons /> -->
        <!-- <MultiStepFormSummary /> -->
        <!-- Stepper Content -->
      </div>
      <div class="flex w-full justify-between pb-3">
        <button
          v-if="stepIndex !== 0"
          class="text-blue-900 select-none hover:text-blue-700 font-bold py-3 px-5 rounded-lg"
          @click="cycleStepIndex('backward')"
        >
          Go Back
        </button>
        <button
          v-if="stepIndex !== 3"
          class="bg-blue-900 select-none hover:bg-blue-700 text-white py-3 px-5 rounded-lg ml-auto"
          @click="cycleStepIndex('forward')"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

function cycleStepIndex(direction: 'forward' | 'backward') {
  if (direction === 'backward') {
    stepIndex.value--
  }
  if (direction === 'forward') {
    if (validationCheck.value.personalInfo) stepIndex.value++
    else isTriggeredValidation.value = true
  }
}

const isTriggeredValidation = ref(false)
const stepIndex = ref(0)

const validationCheck = ref({
  personalInfo: false,
  plan: false,
  addons: false
})

const personalInfo = ref({
  name: '',
  email: '',
  phone: null
})

const selectedPlan = ref({
  plan: '',
  price: 0,
  isMonthly: false
})

const addons = ref([])

// make computed property to sum
const summary = ref({
  name: '',
  email: '',
  phone: '',
  plan: '',
  price: 0,
  isMonthly: false,
  addons: []
})
</script>

<style scoped></style>
