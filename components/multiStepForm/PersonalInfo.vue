<template>
  <MultiStepFormDefaultStep
    :title="t('personalInfo.title')"
    :sub-title="t('personalInfo.subTitle')"
  >
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.name"
      id="name"
      auto-complete="name"
      :label="t('personalInfo.name')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.email"
      id="email"
      auto-complete="email"
      type="email"
      :label="t('personalInfo.emailAddress')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.phone"
      id="phone"
      auto-complete="tel"
      type="text"
      is-use-string-numbers-validator
      :label="t('personalInfo.phoneNumber')"
      :placeholder="t('personalInfo.phoneNumberPlaceholder')"
    />
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { t } = useI18n<{ message: enMultiStepForm }>()
const { personalInfo } = useMultiStepForm()
const emit = defineEmits(['is-valid'])
</script>

<style scoped></style>
