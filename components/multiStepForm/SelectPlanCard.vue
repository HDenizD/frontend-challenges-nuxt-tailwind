<template>
  <div class="outline outline-2 rounded-md outline-indigo-600 w-[7.5rem] p-3">
    <img
      :src="selectedIcon"
      alt=""
    />

    <div class="mt-5">
      <div class="text-base font-bold text-indigo-900">{{ label }}</div>
      <div class="text-sm text-gray-500">
        <p>
          {{ isPriceYearly ? `$${priceMonth * 12}/yr` : `$${priceMonth}/mo` }}
        </p>
        <p v-if="isPriceYearly">2 months free</p>
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
    type: String as PropType<'arcade' | 'advanced' | 'pro'>,
    required: true
  },
  label: {
    type: String,
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
