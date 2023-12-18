import multiStepForm from './multiStepForm'

type enMultiStepForm = typeof multiStepForm.en

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...(multiStepForm.en as enMultiStepForm)
    },
    de: {
      ...multiStepForm.de
    }
  }
}))
