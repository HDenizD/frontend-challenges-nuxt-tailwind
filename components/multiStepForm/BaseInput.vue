<template>
  <div>
    <label
      for="name"
      class="text-sm mb-2 block font-medium text-indigo-950"
    >
      {{ label }}
    </label>
    <div class="mt-1">
      <input
        v-model="inputValue"
        :type="type"
        :name="id"
        :id="id"
        class="focus:ring-indigo-500 focus:outline-indigo-500 w-full outline outline-gray-300 outline-2 p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', inputValue)"
        @blur="validate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const emit = defineEmits(['update:modelValue'])

const inputValue = ref('')

const { validateEmail, validateString, validateStringNumbers } = useValidator()

function validate() {
  if (props.type === 'email') {
    validateEmail(inputValue.value)
    // emit('update:modelValue', validateEmail(inputValue.value))
  } else if (props.type === 'number') {
    console.log(validateStringNumbers(inputValue.value))
    validateStringNumbers(inputValue.value)
  } else {
    console.log(validateString(inputValue.value))
    validateString(inputValue.value)
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
