import multiStepForm from './multiStepForm'

function registerI18nMessages(i18n: any, messages: any) {
  Object.keys(messages).forEach((locale) => {
    i18n.setLocaleMessage(locale, messages[locale])
  })
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...multiStepForm.en
    }
    // de: {
    //   ...multiStepForm.de
    // }
  }
}))

console.log(multiStepForm)
