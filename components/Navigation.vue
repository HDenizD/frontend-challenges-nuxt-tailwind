<template>
  <nav class="flex items-center justify-between dark:bg-dark p-4">
    <div class="flex items-center justify-center w-full">
      <a
        href="#"
        class="text-white font-bold text-lg"
        >Home</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >About</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >Services</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >Contact</a
      >
    </div>
    <color-mode-toggle></color-mode-toggle>
    <button
      class="block md:hidden text-white"
      @click="toggleMenu"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <template v-if="isMenuOpen">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </template>
        <template v-else>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </template>
      </svg>
    </button>
    <div
      v-if="isMenuOpen"
      class="md:flex md:items-center md:w-auto hidden"
    >
      <a
        href="#"
        class="text-white font-bold text-lg"
        >Home</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >About</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >Services</a
      >
      <a
        href="#"
        class="ml-4 text-gray-300 hover:text-white"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
a {
  @apply text-dark dark:text-white hover:text-white;
}
</style>
