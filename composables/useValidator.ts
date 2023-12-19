import { z } from 'zod'

export function useValidator() {
  const emailSchema = z
    .string()
    .min(1, { message: 'validation.required' })
    .email({ message: 'validation.invalidEmail' })

  const stringSchema = z.string().min(1, {
    message: 'validation.required'
  })
  const numberSchema = z.coerce
    .number()
    .min(6, { message: 'validation.minLength6' })
  const stringNumbersSchema = z
    .string()
    .min(6, { message: 'validation.minLength6' })
    .regex(/^[0-9\s\+]*$/, {
      message: 'validation.invalidNumbers'
    })

  function validateEmail(email: string) {
    return emailSchema.safeParse(email)
  }

  function validateString(string: string) {
    return stringSchema.safeParse(string)
  }

  function validateNumber(number: number) {
    return numberSchema.safeParse(number)
  }

  function validateStringNumbers(stringNumbers: string) {
    return stringNumbersSchema.safeParse(stringNumbers)
  }

  const personalInfoSchema = z.object({
    name: stringSchema,
    email: emailSchema,
    phone: stringNumbersSchema
  })

  return {
    personalInfoSchema,
    emailSchema,
    stringSchema,
    numberSchema,
    stringNumbersSchema,
    validateEmail,
    validateString,
    validateNumber,
    validateStringNumbers
  }
}
