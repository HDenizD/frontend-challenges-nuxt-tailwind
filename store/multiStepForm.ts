import { defineStore } from 'pinia'
export const useMultiStepForm = defineStore('multiStepForm', () => {
  function cycleStepIndex(direction: 'forward' | 'backward') {
    if (direction === 'backward') {
      stepIndex.value--
    }
    if (direction === 'forward') {
      if (validationCheck.value.personalInfo) stepIndex.value++
      else isTriggeredValidation.value = true
    }
  }

  const isTriggeredValidation = ref(false)
  const stepIndex = ref(0)

  const validationCheck = ref({
    personalInfo: false,
    plan: false,
    addons: false
  })

  const personalInfo = ref({
    name: '',
    email: '',
    phone: null
  })

  const selectedPlan = ref({
    plan: '',
    price: 0,
    isMonthly: false
  })

  const addons = ref([])

  const summary = ref({
    name: '',
    email: '',
    phone: '',
    plan: '',
    price: 0,
    isMonthly: false,
    addons: []
  })
  return {
    cycleStepIndex,
    isTriggeredValidation,
    stepIndex,
    validationCheck,
    personalInfo,
    selectedPlan,
    addons,
    summary
  }
})
