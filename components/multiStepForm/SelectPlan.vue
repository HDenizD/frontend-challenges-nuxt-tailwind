<template>
  <MultiStepFormDefaultStep
    title="Select Plan"
    sub-title="You have the option of montly or yearly billing."
  >
    <MultiStepFormSelectPlanCard
      label="Arcade"
      :price-month="9"
      icon="arcade"
    />
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts"></script>

<style scoped></style>
