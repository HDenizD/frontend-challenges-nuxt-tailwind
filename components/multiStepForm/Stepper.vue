<template>
  <div class="background-image p-9 rounded-xl">
    <ul>
      <li class="flex items-center gap-4">
        <div
          class="rounded-full bg-blue-300 text-lg text-bold w-[40px] h-[40px] flex justify-center items-center"
        >
          1
        </div>
        <div>
          <p class="text-white font-light">STEP 1</p>
          <p class="text-white font-bold uppercase tracking-widest">
            Your Info
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const steps = ref([
  { name: 'Your Info', value: 'info' },
  { name: 'Select Plan', value: 'plan' },
  { name: 'Add-Ons', value: 'addons' },
  { name: 'Summary', value: 'summary' }
])
</script>

<style scoped>
.background-image {
  background-image: url('./../../challenges/multi-step-form/assets/images/bg-sidebar-desktop.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 270px;
}
</style>
