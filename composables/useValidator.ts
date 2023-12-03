import { z } from 'zod'

export function useValidator() {
  const emailSchema = z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email' })

  const stringSchema = z.string().min(1, { message: 'Field is required' })
  const numberSchema = z.number().min(1, { message: 'Field is required' })
  const stringNumbersSchema = z
    .string()
    .regex(/^[0-9]+$/, {
      message: 'Only numbers are allowed'
    })
    .min(1, { message: 'Field is required' })

  function validateEmail(
    email: string
  ): z.SafeParseSuccess<string> | z.SafeParseError<string> {
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

  return {
    validateEmail,
    validateString,
    validateNumber,
    validateStringNumbers
  }
}
