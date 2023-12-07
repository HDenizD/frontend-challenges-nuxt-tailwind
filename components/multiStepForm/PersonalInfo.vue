<template>
  <MultiStepFormDefaultStep
    title="Personal info"
    sub-title="Please provide your name, email address, and phone number."
  >
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
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { personalInfo } = useMultiStepForm()

const emit = defineEmits(['is-valid'])
</script>

<style scoped></style>
