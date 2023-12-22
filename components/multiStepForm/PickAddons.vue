<template>
  <MultiStepFormDefaultStep
    :title="t('addOns.title')"
    :sub-title="t('addOns.subTitle')"
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
const { t } = useI18n<{ message: enMultiStepForm }>()
const { addons } = storeToRefs(useMultiStepForm())
</script>

<style scoped></style>
