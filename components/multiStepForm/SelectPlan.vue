<template>
  <MultiStepFormDefaultStep
    title="Select Plan"
    sub-title="You have the option of montly or yearly billing."
  >
    <div
      v-if="isForcePlanValidation"
      class="text-red-500 text-sm font-semibold"
    >
      Please select a plan
    </div>
    <div class="relative">
      <div class="md:flex justify-center gap-5">
        <MultiStepFormSelectPlanCard
          v-for="plan in plans"
          :key="plan.label"
          :label="plan.label"
          :price-month="plan.price"
          :is-price-yearly="isYearlyBilling"
          :icon="plan.icon"
          :is-selected="plan.isSelected"
          @click="selectPlan(plan)"
        />
      </div>
      <div
        class="h-10 md:absolute w-full md:top-44 bg-blue-50 rounded-md gap-5 flex items-center justify-center"
      >
        <div
          class="font-bold text-blue-950 cursor-pointer select-none"
          :class="{ 'opacity-40': isYearlyBilling }"
          @click="isYearlyBilling = false"
        >
          Monthly
        </div>
        <div>
          <label class="relative items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="isYearlyBilling"
              class="sr-only peer"
            />
            <div
              class="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-900 peer-checked:after:translate-x-[170%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600"
            />
          </label>
        </div>
        <div
          class="font-bold text-blue-950 cursor-pointer select-none"
          :class="{ 'opacity-40': !isYearlyBilling }"
          @click="isYearlyBilling = true"
        >
          Yearly
        </div>
      </div>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm, type Plan } from '@/store/multiStepForm'

const { validationCheck, plans, isYearlyBilling, isForcePlanValidation } =
  storeToRefs(useMultiStepForm())

function selectPlan(plan: Plan) {
  plans.value.forEach((plan) => (plan.isSelected = false))
  plan.isSelected = true
  isForcePlanValidation.value = false
  validationCheck.value.plan = true
}
</script>

<style scoped></style>
