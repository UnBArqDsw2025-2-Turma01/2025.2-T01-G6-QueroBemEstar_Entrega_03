import { Express, Router } from "express"
import setupCompetitionRoutes from "../routes/competition-routes"

export default (app: Express): void => {
  const router = Router()
  app.use("/api", router)

  setupCompetitionRoutes(router)
}
