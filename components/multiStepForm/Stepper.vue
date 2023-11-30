<template>
  <div class="background-image p-9 rounded-xl">
    <ul>
      <li
        v-for="(step, index) in steps"
        :key="step.value"
        class="flex items-center gap-5 mb-7"
      >
        <div
          class="rounded-full bg-blue-300 text-lg font-bold w-[2.5rem] h-[2.5rem] flex justify-center items-center"
          :class="{
            'bg-blue-300 text-black': step.isActive,
            'outline outline-1 bg-transparent outline-white text-white':
              !step.isActive
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
    <button @click="cycleForwardTroughSteps()">Forward</button>
    <button @click="cycleBackwardTroughSteps()">Backward</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeIndex = ref(0)

const steps = ref([
  { name: 'Your Info', value: 'info', isActive: true },
  { name: 'Select Plan', value: 'plan', isActive: false },
  { name: 'Add-Ons', value: 'addons', isActive: false },
  { name: 'Summary', value: 'summary', isActive: false }
])

const activeStep = computed(() => steps.value[activeIndex.value])

function cycleForwardTroughSteps() {
  if (activeIndex.value < steps.value.length - 1) {
    steps.value[activeIndex.value].isActive = false
    activeIndex.value++
    steps.value[activeIndex.value].isActive = true
  }
}
function cycleBackwardTroughSteps() {
  if (activeIndex.value > 0) {
    steps.value[activeIndex.value].isActive = false
    activeIndex.value--
    steps.value[activeIndex.value].isActive = true
  }
}
</script>

<style scoped>
.background-image {
  background-image: url('./../../challenges/multi-step-form/assets/images/bg-sidebar-desktop.svg');
  background-repeat: none;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 16.875rem;
}
</style>
