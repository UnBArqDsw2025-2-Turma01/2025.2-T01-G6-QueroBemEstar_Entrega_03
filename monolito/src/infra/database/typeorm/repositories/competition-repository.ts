import { Repository } from "typeorm"
import { CompetitionModel } from "../models/competition-model"
import { TypeOrmConnection } from "../typeorm-connection"
import { ICreateCompetitionRepository } from "@/application/protocols/db/create-competition-repository"
import { Competition } from "@/domain/entities/Competition"

export class CompetitionRepository implements ICreateCompetitionRepository {
  private ormRepository: Repository<CompetitionModel>

  constructor() {
    this.ormRepository = TypeOrmConnection.getInstance()
      .getDataSource()
      .getRepository(CompetitionModel)
  }

  async create(data: Competition): Promise<void> {
    const competition = this.ormRepository.create(data)
    await this.ormRepository.save(competition)
  }
}
