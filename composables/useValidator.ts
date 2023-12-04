import { z } from 'zod'

export function useValidator() {
  const emailSchema = z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email' })

  const stringSchema = z.string().min(1, { message: 'This field is required' })
  const numberSchema = z.number().min(6, { message: 'This field is required' })
  const stringNumbersSchema = z
    .string()
    .regex(/^[0-9]+$/, {
      message: 'Only numbers are allowed'
    })
    .min(6, { message: 'This field is required' })

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
    phone: numberSchema
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
