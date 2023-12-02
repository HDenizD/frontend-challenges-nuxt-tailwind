import { z } from 'zod'

export function useValidator() {
  const emailSchema = z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' })

  const stringSchema = z.string()
  const numberSchema = z.number()
  const stringNumbersSchema = z.string().regex(/^[0-9]+$/, {
    message: 'Only numbers are allowed'
  })

  function validateEmail(email: string) {
    const result = emailSchema.safeParse(email)
    if (!result.success) {
      return result.error.issues
    }
    console.log(result)
    return result
  }

  function validateString(string: string) {
    console.log(string)
    return stringSchema.safeParse(string)
  }

  function validateNumber(number: number) {
    return numberSchema.safeParse(number)
  }

  function validateStringNumbers(stringNumbers: string) {
    return stringNumbersSchema.safeParse(stringNumbers)
  }

  return {
    validateEmail,
    validateString,
    validateNumber,
    validateStringNumbers
  }
}
