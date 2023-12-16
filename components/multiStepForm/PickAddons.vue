<template>
  <MultiStepFormDefaultStep
    title="Pick add-ons"
    sub-title="Add-ons help enhance your gaming experience."
  >
    <MultiStepFormAddonCard
      v-for="addon in addons"
      :key="addon.title"
      :title="addon.title"
      :subTitle="addon.subTitle"
      :is-checked="addon.isChecked"
      :price="addon.price"
      @click="addon.isChecked = !addon.isChecked"
    />
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '@/store/multiStepForm'
const { addons } = storeToRefs(useMultiStepForm())
</script>

<style scoped></style>
