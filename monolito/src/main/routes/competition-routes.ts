import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeCreateCompetitionController } from "../factories/controllers/create-competition-factory"

export default (router: Router): void => {
  router.post("/competitions", adaptRoute(makeCreateCompetitionController()))
}
