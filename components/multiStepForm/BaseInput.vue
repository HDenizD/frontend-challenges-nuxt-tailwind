<template>
  <div>
    <div class="flex justify-between">
      <label
        for="name"
        class="text-sm mb-2 block font-medium text-indigo-950"
      >
        {{ label }}
      </label>
      <div class="text-red-500 text-sm font-semibold">
        {{ errorMessages.join(', ') }}
      </div>
    </div>
    <div class="mt-1">
      <input
        v-model="inputValue"
        :type="type"
        :name="id"
        :id="id"
        :class="{
          'outline-red-500': errorMessages.length > 0
        }"
        class="focus:ring-indigo-500 focus:outline-indigo-500 w-full outline outline-gray-300 outline-2 p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        :placeholder="placeholder"
        @input="errorMessages = []"
        @blur="validate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { z } from 'zod'

const emit = defineEmits(['update:modelValue'])

const inputValue = ref('')
const errorMessages = ref<string[]>([])

const { validateEmail, validateString, validateStringNumbers } = useValidator()

function validate() {
  errorMessages.value = []

  function validator(
    fn: (
      value: string | number
    ) => z.SafeParseError<string> | z.SafeParseSuccess<string>
  ) {
    const result = fn(inputValue.value)
    if (result.success) {
      emit('update:modelValue', result.data)
    } else {
      result.error.issues.map((issue: z.ZodIssue) => {
        errorMessages.value.push(issue.message)
      })
    }
  }
  switch (props.type) {
    case 'email':
      validator(() => validateEmail(inputValue.value))
      // const emailResult = validateEmail(inputValue.value)
      // if (emailResult.success) {
      //   console.log(emailResult.data)
      //   emit('update:modelValue', emailResult.data)
      // } else {
      //   emailResult.error.issues.map((issue) => {
      //     errorMessages.value.push(issue.message)
      //   })
      // }
      break

    case 'number':
      console.log(validateStringNumbers(inputValue.value))
      validateStringNumbers(inputValue.value)
      break

    default:
      console.log(validateString(inputValue.value))
      validateString(inputValue.value)
      break
  }
}

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: [String, Number] as PropType<'text' | 'number' | 'email'>,
    default: 'text'
  }
})
</script>

<style scoped></style>
