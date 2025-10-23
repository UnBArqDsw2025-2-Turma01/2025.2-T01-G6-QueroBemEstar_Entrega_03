import { InvalidParamError } from "@/presentation/errors/invalid-param-error"
import { Validation } from "@/presentation/protocols/validation"

export class NumberValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | null {
    if (isNaN(input[this.fieldName])) {
      return new InvalidParamError(`${String(this.fieldName)}`)
    }
    return null
  }
}
