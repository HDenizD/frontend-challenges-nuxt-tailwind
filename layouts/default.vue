<template>
  <header class="sticky top-0 z-50">
    <Navigation />
  </header>
  <main class="md:p-3 dark:bg-dark bg-white dark:text-white text-dark">
    <slot />
  </main>
  <footer></footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
