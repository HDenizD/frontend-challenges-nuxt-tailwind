<template>
  <MultiStepFormDefaultStep
    title="Select Plan"
    sub-title="You have the option of montly or yearly billing."
  >
    <div class="relative">
      <div class="flex justify-center gap-5">
        <MultiStepFormSelectPlanCard
          v-for="plan in plans"
          :key="plan.label"
          :label="plan.label"
          :price-month="9"
          :is-price-yearly="selectedPlan.isYearlyBilling"
          :icon="plan.icon"
          :is-selected="selectedPlan.type === plan.type"
          @click="selectPlan(plan)"
        />
      </div>
      <div
        class="h-10 absolute w-full top-44 bg-blue-50 rounded-md gap-5 flex items-center justify-center"
      >
        <div
          class="font-bold text-blue-950 cursor-pointer select-none"
          :class="{ 'opacity-40': selectedPlan.isYearlyBilling }"
          @click="selectedPlan.isYearlyBilling = false"
        >
          Monthly
        </div>
        <div>
          <label class="relative items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="selectedPlan.isYearlyBilling"
              class="sr-only peer"
            />
            <div
              class="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-900 peer-checked:after:translate-x-[170%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600"
            ></div>
          </label>
        </div>
        <div
          class="font-bold text-blue-950 cursor-pointer select-none"
          :class="{ 'opacity-40': !selectedPlan.isYearlyBilling }"
          @click="selectedPlan.isYearlyBilling = true"
        >
          Yearly
        </div>
      </div>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm, type Plan } from '@/store/multiStepForm'
const { selectedPlan, validationCheck } = useMultiStepForm()

const plans: Plan[] = [
  {
    label: 'Arcade',
    type: 'arcade',
    price: 9,
    icon: 'arcade'
  },
  {
    label: 'Advanced',
    type: 'advanced',
    price: 12,
    icon: 'advanced'
  },
  {
    label: 'Pro',
    type: 'pro',
    price: 15,
    icon: 'pro'
  }
]

function selectPlan(plan: Plan) {
  selectedPlan.type = plan.type
  selectedPlan.price = plan.price
  validationCheck.plan = true
}
</script>

<style scoped></style>
