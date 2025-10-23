import { CreateCompetitionUseCase } from "@/application/usecases/create-competition"
import { CompetitionRepository } from "@/infra/database/typeorm/repositories/competition-repository"
import { CreateCompetitionController } from "@/presentation/controllers/create-competition-controller"
import { makeCreateCompetitionValidation } from "./create-competition-validation-factory"

export const makeCreateCompetitionController = () => {
  const competitionRepository = new CompetitionRepository()
  const usecase = new CreateCompetitionUseCase(competitionRepository)
  const controller = new CreateCompetitionController(
    makeCreateCompetitionValidation(),
    usecase,
  )
  return controller
}
