import { defineStore } from 'pinia'

const { personalInfoSchema } = useValidator()

export type Plan = {
  label?: string
  type: 'arcade' | 'advanced' | 'pro'
  price: number
  isSelected?: boolean
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
        case 3:
          stepIndex.value = 2
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

  const isYearlyBilling = ref(false)
  const plans = ref<Plan[]>([
    {
      label: 'Arcade',
      type: 'arcade',
      price: 9,
      isSelected: false,
      icon: 'arcade'
    },
    {
      label: 'Advanced',
      type: 'advanced',
      isSelected: false,
      price: 12,
      icon: 'advanced'
    },
    {
      label: 'Pro',
      type: 'pro',
      isSelected: false,
      price: 15,
      icon: 'pro'
    }
  ])

  const addons = ref([
    {
      title: 'Online service',
      subTitle: 'Access to multiplayer games',
      value: 'onlineService',
      isChecked: false,
      price: 1
    },
    {
      title: 'Larger storage',
      subTitle: 'Extra 1TB of cloud save',
      value: 'largerStorage',
      isChecked: false,
      price: 2
    },
    {
      title: 'Customizable profile',
      subTitle: 'Custom theme on your profile',
      value: 'customizableProfile',
      isChecked: false,
      price: 2
    }
  ])

  const summary = computed(() => {
    const plan = plans.value.find((plan) => plan.isSelected)
    return {
      name: personalInfo.value.name,
      email: personalInfo.value.email,
      phone: personalInfo.value.phone,
      selectedPlan: plan?.type,
      price: plan?.price,
      isYearlyBilling: isYearlyBilling.value,
      addons: addons.value
        .filter((addon) => addon.isChecked)
        .map((addon) => ({ value: addon.value, price: addon.price }))
    }
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
    isYearlyBilling,
    plans,
    addons,
    summary
  }
})
