import { Validation } from "@/presentation/protocols/validation"
import { NumberValidation } from "@/validation/validators/number-validation"
import { RequiredFieldValidation } from "@/validation/validators/required-field-validation"
import { ValidationComposite } from "@/validation/validators/validation-composite"

export const makeCreateCompetitionValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ["name", "durationInDays"]) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new NumberValidation("durationInDays"))
  return new ValidationComposite(validations)
}
