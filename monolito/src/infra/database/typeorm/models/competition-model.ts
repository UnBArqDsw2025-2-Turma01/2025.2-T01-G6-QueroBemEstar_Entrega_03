import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("competitions")
export class CompetitionModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: "text", nullable: true })
  description: string

  @Column()
  startDate: Date

  @Column()
  durationInDays: number

  @Column()
  invitationCode: string

  @Column()
  ownerId: number

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date
}
