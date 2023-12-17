<template>
  <div
    v-if="title"
    class="pb-1 text-3xl font-bold text-indigo-950"
  >
    {{ title }}
  </div>
  <p
    v-if="subTitle"
    class="text-gray-400"
  >
    {{ subTitle }}
  </p>
  <div class="mt-7 flex flex-col gap-5"><slot /></div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
