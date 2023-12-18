import en from './en'
import de from './de'

declare global {
  type enMultiStepForm = typeof en
  type deMultiStepForm = typeof de
}
