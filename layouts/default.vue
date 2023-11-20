<template>
  <div
    :class="{ dark: isDark }"
    class="bg-white dark:bg-dark text-white dark:text-black p-3 h-screen"
  >
    <button
      class="border-solid border-2 border-sky-500 rounded-md p-2"
      @click="toggleDarkMode"
    >
      Toggle Dark Mode
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  console.log(isDark.value)
  isDark.value = !isDark.value
}
</script>

<style scoped></style>
