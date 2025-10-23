import { Competition } from "../entities/Competition"

export interface ICreateCompetitionModel {
  name: string
  description?: string
  durationInDays: number
  ownerId: number
}

export interface ICreateCompetitionUseCase {
  create(data: ICreateCompetitionModel): Promise<Competition>
}
