<template>
  <button
    class="dark:outline-white scale-125 rounded-md text-white flex items-center"
    @click="toggleDarkMode"
  >
    <Icon
      v-if="
        colorMode.preference === 'system' || colorMode.preference === 'dark'
      "
      name="mdi:moon-waning-crescent"
      color="white"
    />
    <Icon
      v-else
      name="mdi:white-balance-sunny"
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

onMounted(() => {
  console.log(colorMode.preference)
})
</script>

<style scoped></style>
