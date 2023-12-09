import { defineStore } from 'pinia'

const { personalInfoSchema } = useValidator()

export type Plan = {
  label?: string
  type: 'arcade' | 'advanced' | 'pro'
  price: number
  icon?: 'arcade' | 'advanced' | 'pro'
  isYearlyBilling?: boolean
}

export const useMultiStepForm = defineStore('multiStepForm', () => {
  function cycleStepIndex(direction: 'forward' | 'backward') {
    if (direction === 'backward') {
      switch (stepIndex.value) {
        case 0:
          return
        case 1:
          stepIndex.value = 0
          break
        case 2:
          stepIndex.value = 1
          break
      }
    }
    if (direction === 'forward') {
      switch (stepIndex.value) {
        case 0:
          if (validationCheck.value.personalInfo) {
            stepIndex.value = 1
          } else {
            isForceValidation.value = true
          }
          break
        case 1:
          if (validationCheck.value.plan) {
            stepIndex.value = 2
          } else {
            isForceValidation.value = true
          }
          break
        case 2:
          if (validationCheck.value.addons) {
            stepIndex.value = 3
          } else {
            isForceValidation.value = true
          }
          break
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

  const selectedPlan = ref<Plan>({
    type: '' as Plan['type'],
    price: 0,
    isYearlyBilling: false
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
