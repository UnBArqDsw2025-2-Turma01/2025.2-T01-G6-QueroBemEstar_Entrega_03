import { DataSource } from "typeorm"
import env from "@/main/config/env"

export interface TypeOrmConnectionOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
}

export class TypeOrmConnection {
  private static instance: TypeOrmConnection
  private dataSource: DataSource | null = null

  private readonly host: string
  private readonly port: number
  private readonly username: string
  private readonly password: string
  private readonly database: string

  private constructor(options: TypeOrmConnectionOptions) {
    this.host = options.host
    this.port = options.port
    this.username = options.username
    this.password = options.password
    this.database = options.database
  }

  public static getInstance(): TypeOrmConnection {
    if (!TypeOrmConnection.instance) {
      TypeOrmConnection.instance = new TypeOrmConnection({
        host: env.db_host,
        port: env.db_port,
        username: env.db_user,
        password: env.db_password,
        database: env.db_name,
      })
    }
    return TypeOrmConnection.instance
  }

  public async initialize(): Promise<void> {
    if (this.dataSource && this.dataSource.isInitialized) {
      return
    }

    this.dataSource = new DataSource({
      type: "mysql",
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      synchronize: process.env.NODE_ENV !== "production",
      logging: process.env.NODE_ENV === "development",
      entities: [`${__dirname}/models/*.{ts,js}`],
      migrations: [`${__dirname}/migrations/*.{ts,js}`],
    })

    await this.dataSource.initialize()
    console.log("Database connection initialized")
  }

  public getDataSource(): DataSource {
    if (!this.dataSource || !this.dataSource.isInitialized) {
      throw new Error("DataSource is not initialized")
    }
    return this.dataSource
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource && this.dataSource.isInitialized) {
      await this.dataSource.destroy()
      this.dataSource = null
    }
  }
}
