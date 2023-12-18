<template>
  <MultiStepFormDefaultStep
    :title="$t('personalInfoTitle')"
    :sub-title="$t('personalInfoSubTitle')"
  >
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.name"
      id="name"
      :label="$t('name')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.email"
      id="email"
      type="email"
      :label="$t('emailAddress')"
    />
    <MultiStepFormBaseInput
      v-model.trim="personalInfo.phone"
      id="phone"
      type="text"
      is-use-string-numbers-validator
      :label="$t('phoneNumber')"
      :placeholder="$t('phoneNumberPlaceholder')"
    />
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import { useMultiStepForm } from '~/store/multiStepForm'

const { t } = useI18n()

const { personalInfo } = useMultiStepForm()

t('')

const emit = defineEmits(['is-valid'])
</script>

<style scoped></style>
