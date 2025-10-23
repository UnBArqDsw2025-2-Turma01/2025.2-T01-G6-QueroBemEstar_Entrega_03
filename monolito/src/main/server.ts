import "dotenv/config"
import "reflect-metadata"
import env from "./config/env"
import { TypeOrmConnection } from "@/infra/database/typeorm/typeorm-connection"
import { setupApp } from "./config/app"

TypeOrmConnection.getInstance()
  .initialize()
  .then(async () => {
    const app = await setupApp()
    app.listen(env.port, () => {
      console.log(`Server is running on http://localhost:${env.port}`)
    })
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error)
  })
