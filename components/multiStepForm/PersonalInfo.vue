<template>
  <MultiStepFormDefaultStep
    :title="t('personalInfo.title')"
    :sub-title="t('personalInfo.subTitle')"
  >
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.name"
      id="name"
      :label="t('personalInfo.name')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.email"
      id="email"
      type="email"
      :label="t('personalInfo.emailAddress')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.phone"
      id="phone"
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
