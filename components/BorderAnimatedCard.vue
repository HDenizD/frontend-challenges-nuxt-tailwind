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
  animation: spin 1s linear infinite;
  width: 1000px;
}

.animated-card:hover {
  transform: scale(1.05);
}
.animated-card::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 130%;
  animation: spin 2s linear infinite;
  transition: 0.2s ease-in-out;
  background: linear-gradient(#4800ff 0%, #ff6200 100%);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
