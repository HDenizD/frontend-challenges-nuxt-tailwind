<template>
  <div class="pb-1 text-3xl font-bold text-indigo-950">Personal info</div>
  <p class="text-gray-400">
    Please provide your name, email address, and phone number.
  </p>
  <div class="mt-7 flex flex-col gap-5">
    <MultiStepFormBaseInput
      v-model="personalInfo.name"
      id="name"
      label="Name"
      :force-validation="forceValidation"
    />
    <MultiStepFormBaseInput
      v-model="personalInfo.email"
      id="email"
      type="email"
      label="Email Address"
      :force-validation="forceValidation"
    />
    <MultiStepFormBaseInput
      v-model="personalInfo.phone"
      id="phone"
      type="number"
      label="Phone Number"
      placeholder="e.g. +1 234 567 890"
      :force-validation="forceValidation"
    />
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
const { emailSchema, numberSchema, stringSchema } = useValidator()

onMounted(() => {})

const props = defineProps({
  modelValue: {
    type: Object as PropType<{
      name: string
      email: string
      phone: number | null
    }>,
    required: true
  },
  personalInfo: {
    type: Object as PropType<{
      name: string
      email: string
      phone: number | null
    }>,
    required: true
  },
  forceValidation: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['is-valid'])

const personalInfoSchema = z.object({
  name: stringSchema,
  email: emailSchema,
  phone: numberSchema
})

watch(
  () => props.personalInfo,
  () => {
    const result = personalInfoSchema.safeParse(props.personalInfo)
    console.log(result)
    emit('is-valid', result.success)
  },
  { deep: true }
)

// function handleSubmit() {
//   const result = personalInfoSchema.safeParse(props.personalInfo)
//   emit('is-valid', result.success)
// }
</script>

<style scoped></style>
