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
            isForceInputValidation.value = true
          }
          break
        case 1:
          if (validationCheck.value.plan) {
            stepIndex.value = 2
          } else {
            isForcePlanValidation.value = true
          }
          break
        case 2:
          stepIndex.value = 3
          break
      }
    }
  }

  const isForceInputValidation = ref(false)
  const isForcePlanValidation = ref(false)
  const stepIndex = ref(0)

  const validationCheck = ref({
    personalInfo: false,
    plan: false
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
      title: 'addOns.addon.onlineService.title',
      subTitle: 'addOns.addon.onlineService.description',
      value: 'onlineService',
      isChecked: false,
      price: 1
    },
    {
      title: 'addOns.addon.largerStorage.title',
      subTitle: 'addOns.addon.largerStorage.description',
      value: 'largerStorage',
      isChecked: false,
      price: 2
    },
    {
      title: 'addOns.addon.customizableProfile.title',
      subTitle: 'addOns.addon.customizableProfile.description',
      value: 'customizableProfile',
      isChecked: false,
      price: 2
    }
  ])

  const selectedPlan = computed(() => {
    return plans.value.find((plan) => plan.isSelected)
  })

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
        .map((addon) => ({
          value: addon.value,
          price: addon.price,
          title: addon.title
        }))
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
    isForceInputValidation,
    cycleStepIndex,
    stepIndex,
    validationCheck,
    personalInfo,
    isYearlyBilling,
    plans,
    selectedPlan,
    addons,
    isForcePlanValidation,
    summary
  }
})
