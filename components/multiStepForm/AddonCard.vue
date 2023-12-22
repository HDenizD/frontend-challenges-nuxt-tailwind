<template>
  <div
    class="inline-flex items-center outline outline-2 outline-indigo-800 py-3 px-4 rounded-md select-none cursor-pointer hover:bg-indigo-100"
  >
    <MultiStepFormCheckbox :is-checked="isChecked" />
    <div class="ml-4">
      <h3 class="text-blue-900 font-bold">{{ t(title) }}</h3>
      <p class="text-sm font-semibold text-gray-400">{{ t(subTitle) }}</p>
    </div>
    <div class="ml-auto">
      <span class="font-semibold text-sm text-indigo-500"
        >+{{ t('shared.currency') }}{{ isYearlyBilling ? price * 12 : price
        }}{{
          isYearlyBilling
            ? `/${t('shared.shortYearly')}`
            : `/${t('shared.shortMonthly')}`
        }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'
const { t } = useI18n<{ message: enMultiStepForm }>()
const { isYearlyBilling } = useMultiStepForm()

defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  isChecked: {
    type: Boolean,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
</script>

<style scoped></style>
