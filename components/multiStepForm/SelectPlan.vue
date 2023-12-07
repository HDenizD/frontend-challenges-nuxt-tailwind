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
      />
      <MultiStepFormSelectPlanCard
        label="Arcade"
        :price-month="12"
        icon="arcade"
      />
      <MultiStepFormSelectPlanCard
        label="Arcade"
        :price-month="15"
        icon="arcade"
      />
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts"></script>

<style scoped></style>
