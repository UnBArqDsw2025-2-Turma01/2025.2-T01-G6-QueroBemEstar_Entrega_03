import { Competition } from "@/domain/entities/Competition"

export interface ICreateCompetitionRepository {
  create(data: Competition): Promise<void>
}
