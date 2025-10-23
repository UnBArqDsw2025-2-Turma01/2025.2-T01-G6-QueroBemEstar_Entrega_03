import { ICreateCompetitionUseCase } from "@/domain/usecases/create-competition-interface"
import { badRequest } from "../helper/http-helper"
import { IController } from "../protocols/controller"
import { HttpRequest, HttpResponse } from "../protocols/http"
import { Validation } from "../protocols/validation"
import { MissingParamError } from "../errors/missing-param-error"

export interface CreateCompetitionRequest {
  name: string
  description?: string
  durationInDays: number
}

export class CreateCompetitionController implements IController {
  constructor(
    private readonly validation: Validation<CreateCompetitionRequest>,
    private readonly createCompetition: ICreateCompetitionUseCase,
  ) {}

  async handle(
    request: HttpRequest<CreateCompetitionRequest>,
  ): Promise<HttpResponse> {
    const temporaryOwnerId = 1

    if (!request.body) {
      return badRequest(new MissingParamError("body"))
    }

    const error = this.validation.validate(request.body)
    if (error) {
      return badRequest(error)
    }

    const { name, durationInDays, description } =
      request.body as CreateCompetitionRequest

    const competition = await this.createCompetition.create({
      ownerId: temporaryOwnerId,
      name,
      durationInDays: Number(durationInDays),
      description,
    })

    return {
      statusCode: 200,
      body: competition,
    }
  }
}
