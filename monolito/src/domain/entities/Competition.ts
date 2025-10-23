export enum CompetitionStatus {
  UPCOMING = "upcoming",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

export class Competition {
  public readonly id?: number
  public name: string
  public description?: string
  public startDate: Date
  public durationInDays: number
  public status: CompetitionStatus
  public invitationCode: string
  public ownerId: number

  //public participantIds: number[] // TODO: Sem entidade usuarios por enquanto

  // Timestamps
  public readonly createdAt: Date
  public updatedAt: Date

  private constructor(props: {
    id?: number
    name: string
    description?: string
    startDate: Date
    durationInDays: number
    invitationCode: string
    status: CompetitionStatus
    ownerId: number
    // participantIds: number[]
    createdAt: Date
    updatedAt: Date
  }) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.startDate = props.startDate
    this.durationInDays = props.durationInDays
    this.invitationCode = props.invitationCode
    this.status = props.status
    this.ownerId = props.ownerId
    // this.participantIds = props.participantIds
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }

  public static create(props: {
    name: string
    description?: string
    durationInDays: number
    ownerId: number
  }): Competition {
    // TODO: Regras de negocio podem ser aplicadas aqui

    const competition = new Competition({
      ...props,
      // participantIds: [],
      startDate: new Date(), // TODO: Ajustar data de inicio conforme regras de negocio
      status: CompetitionStatus.ONGOING, // TODO: Ajustar status conforme regras de negocio
      invitationCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return competition
  }
}
