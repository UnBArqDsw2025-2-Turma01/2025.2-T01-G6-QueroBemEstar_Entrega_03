import { Competition } from "@/domain/entities/Competition"
import {
  ICreateCompetitionModel,
  ICreateCompetitionUseCase,
} from "@/domain/usecases/create-competition-interface"
import { ICreateCompetitionRepository } from "../protocols/db/create-competition-repository"

export class CreateCompetitionUseCase implements ICreateCompetitionUseCase {
  constructor(
    private readonly createCompetitionRepository: ICreateCompetitionRepository,
  ) {}

  async create(data: ICreateCompetitionModel): Promise<Competition> {
    // TODO: Implemetar logica de negócio, validações, etc.

    const competition = Competition.create({
      name: data.name,
      description: data.description,
      durationInDays: data.durationInDays,
      ownerId: data.ownerId,
    })

    await this.createCompetitionRepository.create(competition)
    return competition
  }
}
