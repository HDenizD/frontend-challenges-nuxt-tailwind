<template>
  <div class="pb-1 text-3xl font-bold text-indigo-950">{{ title }}</div>
  <p class="text-gray-400">{{ subTitle }}</p>
  <div class="mt-7 flex flex-col gap-5"><slot /></div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
