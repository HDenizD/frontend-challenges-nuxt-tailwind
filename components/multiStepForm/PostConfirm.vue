<template>
  <MultiStepFormDefaultStep>
    <div
      class="flex justify-center items-center py-20 bg-white p-8 my-5 md:mx-0 mx-5 -top-28 relative md:static rounded-xl"
    >
      <div class="flex flex-col">
        <img
          :src="thankYouIcon"
          alt=""
          class="self-center mb-5"
        />
        <div class="text-3xl text-blue-950 font-bold text-center mb-4">
          {{ t('postConfirm.thankYou') }}
        </div>
        <p class="text-center text-gray-400 mx-5">
          {{ t('postConfirm.thankYouText') }}
          <a
            href="mailto:support@loremgaming.com"
            class="underline text-blue-800"
          >
            {{ t('postConfirm.email') }}</a
          >.
        </p>
      </div>
    </div>
  </MultiStepFormDefaultStep>
</template>

<script setup lang="ts">
import thankYouIcon from '@/challenges/multi-step-form/assets/images/icon-thank-you.svg'
const { t } = useI18n<{ message: enMultiStepForm }>()
</script>

<style scoped></style>
