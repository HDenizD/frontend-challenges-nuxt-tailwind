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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const inputValue = ref('')

defineProps({
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
    type: String,
    default: 'text'
  }
})
</script>

<style scoped></style>
