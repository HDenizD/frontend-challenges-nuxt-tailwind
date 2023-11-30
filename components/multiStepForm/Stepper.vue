<template>
  <div class="background-image p-9 rounded-xl">
    <ul>
      <li
        v-for="(step, index) in steps"
        :key="step.value"
        class="flex items-center gap-5 mb-7"
      >
        <div
          class="rounded-full bg-blue-300 text-lg text-bold w-[40px] h-[40px] flex justify-center items-center text-white"
          :class="{
            'bg-blue-300 text-black': step.isActive,
            'outline outline-1 bg-transparent outline-white': !step.isActive
          }"
        >
          {{ index + 1 }}
        </div>
        <div>
          <p class="text-white font-light">STEP {{ index + 1 }}</p>
          <p class="text-white font-bold uppercase tracking-widest">
            {{ step.name }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeStep = ref(0)

const steps = ref([
  { name: 'Your Info', value: 'info', isActive: true },
  { name: 'Select Plan', value: 'plan', isActive: false },
  { name: 'Add-Ons', value: 'addons', isActive: false },
  { name: 'Summary', value: 'summary', isActive: false }
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
