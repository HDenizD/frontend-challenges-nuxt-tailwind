<template>
  <div
    class="background-image md:bg-center bg-bottom bg-repeat bg-cover md:bg-clip-border md:static min-w-full relative md:min-w-[290px] p-9 md:rounded-xl md:h-full h-48"
  >
    <ul class="flex gap-x-5 relative top-4 justify-center md:block">
      <li
        v-for="(step, index) in steps"
        :key="step.value"
        class="flex items-center gap-5 mb-7"
      >
        <div
          class="leading-normal rounded-full bg-blue-300 text-lg font-bold w-[2.5rem] h-[2.5rem] flex justify-center items-center"
          :class="{
            'bg-blue-300 text-black': step.isActive,
            'outline outline-1 bg-transparent outline-white text-white':
              !step.isActive
          }"
        >
          {{ index + 1 }}
        </div>
        <div class="hidden md:block">
          <p class="text-white font-light uppercase">
            {{ t('stepper.step') }} {{ index + 1 }}
          </p>
          <p class="text-white text-xs font-bold uppercase tracking-widest">
            {{ t(step.name) }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n<{ message: enMultiStepForm }>()

const props = defineProps({
  stepIndex: {
    type: Number,
    required: true
  }
})

function setActiveStepIndex(index: number) {
  steps.value.forEach((step, i) => {
    if (i === index) {
      step.isActive = true
    } else {
      step.isActive = false
    }
  })
}

watch(
  () => props.stepIndex,
  (index) => {
    setActiveStepIndex(index)
  }
)

const steps = ref([
  { name: 'stepper.yourInfo', value: 'info', isActive: true },
  { name: 'stepper.selectPlan', value: 'plan', isActive: false },
  { name: 'stepper.addOns', value: 'addons', isActive: false },
  { name: 'stepper.summary', value: 'summary', isActive: false }
])
</script>

<style scoped>
.background-image {
  background-image: url('./../../challenges/multi-step-form/assets/images/bg-sidebar-mobile.svg');
}

@screen md {
  .background-image {
    background-image: url('./../../challenges/multi-step-form/assets/images/bg-sidebar-desktop.svg');
  }
}
</style>
