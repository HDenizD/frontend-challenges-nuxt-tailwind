<template>
  <label
    class="relative flex items-center rounded-full cursor-pointer"
    htmlFor="blue"
  >
    <input
      type="checkbox"
      class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-indigo-500 transition-all before:absolute before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-indigo-700"
      id="blue"
      :checked="isChecked"
    />
    <Icon
      name="material-symbols:check-small-rounded"
      class="text-2xl absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
    />
  </label>
</template>

<script setup lang="ts">
defineProps({
  isChecked: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped></style>
