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
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
const selectedPlan = ref('arcade')

function selectPlan(plan: 'arcade' | 'advanced' | 'pro') {
  selectedPlan.value = plan
}
</script>

<style scoped></style>
