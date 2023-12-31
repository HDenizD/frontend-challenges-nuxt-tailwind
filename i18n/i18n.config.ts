import multiStepForm from './multiStepForm'

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en: {
      ...multiStepForm.en
    },
    de: {
      ...multiStepForm.de
    }
  }
}))
