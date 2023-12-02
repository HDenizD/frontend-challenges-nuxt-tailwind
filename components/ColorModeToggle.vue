<template>
  <button
    class="dark:outline-white scale-125 rounded-md text-white flex items-center"
    @click="toggleDarkMode"
  >
    <Icon
      v-if="
        colorMode.preference === 'system' || colorMode.preference === 'dark'
      "
      name="material-symbols:nights-stay"
      color="white"
    />
    <Icon
      v-if="
        colorMode.preference === 'system' || colorMode.preference === 'light'
      "
      name="material-symbols:partly-cloudy-day-rounded"
      class="text-dark"
    />
  </button>
  <!-- <span class="dark:text-white">{{ colorMode }}</span> -->
</template>

<script setup>
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.preference === 'dark'
    ? (colorMode.preference = 'light')
    : (colorMode.preference = 'dark')
}
</script>

<style scoped></style>
