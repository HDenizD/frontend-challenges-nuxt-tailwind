<template>
  <MultiStepFormDefaultStep
    title="Finishing Up"
    sub-title="Double-check everthing looks OK before confirming."
  >
    <div class="bg-[#f7f9fe] w-full rounded-md p-5">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-bold text-blue-900">
            {{ selectedPlan?.label }} ({{
              isYearlyBilling ? 'Yearly' : 'Monthly'
            }})
          </p>
          <button
            class="underline text-grey-600 opacity-50"
            @click="stepIndex = 1"
          >
            Change
          </button>
        </div>
        <div>
          <p class="font-extrabold text-blue-900">
            ${{ handleCalcIfYearlyBilling(selectedPlan?.price || 0) }}/{{
              isYearlyBilling ? 'yr' : 'mo'
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
            {{ addon.title }}
          </p>
          <p class="text-blue-950 font-semibold text-sm">
            +${{ handleCalcIfYearlyBilling(addon.price) }}/{{
              isYearlyBilling ? 'yr' : 'mo'
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="mx-5 flex justify-between">
      <p class="text-gray-500 opacity-70 font-semibold">
        Total ({{ isYearlyBilling ? 'per year' : 'per month' }})
      </p>
      <p class="text-indigo-700 font-bold text-lg">
        +${{ calcTotalPrice() }}/{{ isYearlyBilling ? 'yr' : 'mo' }}
      </p>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { isYearlyBilling, summary, selectedPlan, stepIndex } = storeToRefs(
  useMultiStepForm()
)

function handleCalcIfYearlyBilling(price: number) {
  return isYearlyBilling ? price * 12 : price
}

function calcTotalPrice() {
  const total = summary.value.addons.reduce((acc, addon) => {
    return acc + addon.price
  }, selectedPlan.value?.price || 0)

  return handleCalcIfYearlyBilling(total)
}
</script>

<style scoped></style>
