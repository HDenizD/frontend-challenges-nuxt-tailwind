<template>
  <div class="pb-1 text-3xl font-bold text-indigo-950">Personal info</div>
  <p class="text-gray-400">
    Please provide your name, email address, and phone number.
  </p>
  <div class="mt-7 flex flex-col gap-5">
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.name"
      id="name"
      label="Name"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.email"
      id="email"
      type="email"
      label="Email Address"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.phone"
      id="phone"
      type="text"
      is-use-string-numbers-validator
      label="Phone Number"
      placeholder="e.g. +1 234 567 890"
    />
  </div>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { personalInfo } = useMultiStepForm()

const props = defineProps({
  forceValidation: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['is-valid'])
</script>

<style scoped></style>
