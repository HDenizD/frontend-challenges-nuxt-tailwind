<template>
  <div
    class="hover:bg-indigo-100 cursor-pointer outline outline-2 rounded-md outline-indigo-600 md:w-[7.5rem] flex mb-4 md:mb-0 md:block items-center p-3 select-none"
    :class="{ 'bg-indigo-100': isSelected }"
  >
    <img
      :src="selectedIcon"
      alt=""
    />

    <div class="md:mt-5 ml-3 md:ml-0">
      <div class="text-base font-bold text-indigo-900">{{ label }}</div>
      <div class="text-sm text-gray-500">
        <p class="my-0.5">
          {{ isPriceYearly ? `$${priceMonth * 12}/yr` : `$${priceMonth}/mo` }}
        </p>
        <p
          v-if="isPriceYearly"
          class="text-blue-800 font-semibold"
        >
          2 months free
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import arcadeIcon from './../../challenges/multi-step-form/assets/images/icon-arcade.svg'
import advancedIcon from './../../challenges/multi-step-form/assets/images/icon-advanced.svg'
import proIcon from './../../challenges/multi-step-form/assets/images/icon-pro.svg'
import type { PropType } from 'vue'
const props = defineProps({
  icon: {
    type: String as PropType<'arcade' | 'advanced' | 'pro' | undefined>,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  label: {
    type: String as PropType<string | undefined>,
    required: true
  },
  priceMonth: {
    type: Number,
    required: true
  },
  isPriceYearly: {
    type: Boolean,
    default: false
  }
})

const selectedIcon = computed(() => {
  switch (props.icon) {
    case 'arcade':
      return arcadeIcon
    case 'advanced':
      return advancedIcon
    case 'pro':
      return proIcon
  }
})
</script>

<style scoped></style>
