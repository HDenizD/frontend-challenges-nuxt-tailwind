<template>
  <MultiStepFormDefaultStep
    title="Select Plan"
    sub-title="You have the option of montly or yearly billing."
  >
    <div class="flex justify-center gap-5">
      <MultiStepFormSelectPlanCard
        label="Arcade"
        :price-month="9"
        icon="arcade"
        :is-selected="selectedPlan === 'arcade'"
        @click="selectPlan('arcade')"
      />
      <MultiStepFormSelectPlanCard
        label="Advanced"
        :price-month="12"
        icon="advanced"
        :is-selected="selectedPlan === 'advanced'"
        @click="selectPlan('advanced')"
      />
      <MultiStepFormSelectPlanCard
        label="Pro"
        :price-month="15"
        icon="pro"
        :is-selected="selectedPlan === 'pro'"
        @click="selectPlan('pro')"
      />
    </div>
    <div
      class="h-10 bg-blue-50 rounded-md mt-3 gap-5 flex items-center justify-center"
    >
      <div class="font-bold text-blue-950">Monthly</div>
      <div>
        <label class="relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
          ></div>
        </label>
      </div>
      <div class="font-bold text-blue-950">Yearly</div>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
const selectedPlan = ref('arcade')

function selectPlan(plan: 'arcade' | 'advanced' | 'pro') {
  selectedPlan.value = plan
}
</script>

<style scoped></style>
