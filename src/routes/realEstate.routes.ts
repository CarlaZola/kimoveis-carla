import { Router } from "express";
import { createNewRealEstateController, readAllRealEstatesController } from "../controllers/realEstate/realEstate.controllers";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware";
import { checkTypeUserMiddleware } from "../middlewares/checkTypeUser.middleware";

const realEstateRoutes: Router = Router()


realEstateRoutes.post('',
checkTokenIsValidMiddleware,
checkTypeUserMiddleware,
checkBodyIsValidMiddleware(realEstateSchemaRequest),
createNewRealEstateController
)

realEstateRoutes.get('', 
readAllRealEstatesController
)

export {
    realEstateRoutes
}