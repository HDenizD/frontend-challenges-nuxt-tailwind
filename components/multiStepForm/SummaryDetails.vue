<template>
  <MultiStepFormDefaultStep
    :title="t('summary.title')"
    :sub-title="t('summary.subTitle')"
  >
    <div class="bg-[#f7f9fe] w-full rounded-md p-5">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-bold text-blue-900">
            {{ selectedPlan?.label }} ({{
              isYearlyBilling ? t('shared.yearly') : t('shared.monthly')
            }})
          </p>
          <button
            class="underline text-grey-600 opacity-50"
            @click="stepIndex = 1"
          >
            {{ t('summary.change') }}
          </button>
        </div>
        <div>
          <p class="font-extrabold text-blue-900">
            {{ t('shared.currency')
            }}{{ handleCalcIfYearlyBilling(selectedPlan?.price || 0) }}/{{
              isYearlyBilling
                ? t('shared.shortYearly')
                : t('shared.shortMonthly')
            }}
          </p>
        </div>
      </div>
      <div v-if="summary.addons.length !== 0">
        <hr class="my-6" />
        <div
          v-for="addon in summary.addons"
          class="flex mb-3 justify-between"
        >
          <p class="text-gray-600 opacity-50 font-semibold">
            {{ t(addon.title) }}
          </p>
          <p class="text-blue-950 font-semibold text-sm">
            +{{ t('shared.currency')
            }}{{ handleCalcIfYearlyBilling(addon.price) }}/{{
              isYearlyBilling
                ? t('shared.shortYearly')
                : t('shared.shortMonthly')
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="mx-5 flex justify-between">
      <p class="text-gray-500 opacity-70 font-semibold">
        {{ t('summary.total') }} ({{
          isYearlyBilling
            ? `${t('summary.per')} ${t('shared.year')}`
            : `${t('summary.per')} ${t('shared.month')}`
        }})
      </p>
      <p class="text-indigo-700 font-bold text-lg">
        {{ t('shared.currency') }}{{ calcTotalPrice() }}
      </p>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { t } = useI18n<{ message: enMultiStepForm }>()
const { isYearlyBilling, summary, selectedPlan, stepIndex } = storeToRefs(
  useMultiStepForm()
)

function handleCalcIfYearlyBilling(price: number) {
  return isYearlyBilling.value ? price * 12 - price * 2 : price
}

function calcTotalPrice() {
  const total = summary.value.addons.reduce((acc, addon) => {
    return acc + addon.price
  }, selectedPlan.value?.price || 0)

  return handleCalcIfYearlyBilling(total)
}
</script>

<style scoped></style>
