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

const emit = defineEmits(['update:modelValue'])

const inputValue = ref('')
const errorMessages = ref<string[]>([])

const { validateEmail, validateString, validateStringNumbers, validateNumber } =
  useValidator()

function validate() {
  errorMessages.value = []

  switch (props.type) {
    case 'email':
      const emailResult = validateEmail(inputValue.value)
      if (emailResult.success) {
        emit('update:modelValue', emailResult.data)
      } else {
        emailResult.error.issues.map((issue) => {
          errorMessages.value.push(issue.message)
        })
      }
      break

    case 'number':
      const numberResult = validateNumber(+inputValue.value)
      if (numberResult.success) {
        emit('update:modelValue', numberResult.data)
      } else {
        numberResult.error.issues.map((issue) => {
          errorMessages.value.push(issue.message)
        })
      }
      break

    default:
      const stringResult = validateString(inputValue.value)
      if (stringResult.success) {
        emit('update:modelValue', stringResult.data)
      } else {
        stringResult.error.issues.map((issue) => {
          errorMessages.value.push(issue.message)
        })
      }
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
