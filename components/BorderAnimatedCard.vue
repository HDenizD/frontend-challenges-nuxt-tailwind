<template>
  <div class="animated-card">
    <div class="inner-content">card content</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.animated-card {
  margin: 30px;
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.animated-card:hover::before {
  animation: spin 0.5s linear infinite;
}

.animated-card:hover {
  transform: scale(1.05);
}
.animated-card::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 130%;
  transition-duration: 5000ms !important;
  animation: spin 2s linear infinite;
  background: linear-gradient(#4800ff 0%, #ff6200 100%);
}
.animated-card::after {
  content: '';
  inset: 2px;
  background: #121212;
  border-radius: 20px;
  position: absolute;
}

.inner-content {
  z-index: 1;
}
</style>
