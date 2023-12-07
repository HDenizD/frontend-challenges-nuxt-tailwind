import { defineStore } from 'pinia'

const { personalInfoSchema } = useValidator()

export const useMultiStepForm = defineStore('multiStepForm', () => {
  function cycleStepIndex(direction: 'forward' | 'backward') {
    if (direction === 'backward') {
      stepIndex.value--
    }
    if (direction === 'forward') {
      stepIndex.value++
      if (validationCheck.value.personalInfo) {
        stepIndex.value++
      } else {
        isForceValidation.value = true
      }
    }
  }

  const isForceValidation = ref(false)
  const stepIndex = ref(0)

  const validationCheck = ref({
    personalInfo: false,
    plan: false,
    addons: false
  })

  const personalInfo = ref({
    name: '',
    email: '',
    phone: ''
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

  watch(
    personalInfo,
    () => {
      const result = personalInfoSchema.safeParse(personalInfo.value)
      validationCheck.value.personalInfo = result.success
    },
    { deep: true }
  )

  return {
    isForceValidation,
    cycleStepIndex,
    stepIndex,
    validationCheck,
    personalInfo,
    selectedPlan,
    addons,
    summary
  }
})
