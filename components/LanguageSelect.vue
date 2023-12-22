<template>
  <select
    v-model="locale"
    name="lang-select"
    id="lang-select"
    class="rounded-md border-gray-300 shadow-sm focus:border-purple-600 focus:ring focus:ring-purple-600 p-1"
  >
    <option
      value="en"
      class="active:bg-purple-600"
    >
      en
    </option>
    <option value="de">de</option>
  </select>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style scoped></style>
