import { Router } from "express"
import { createNewSchedulesController } from "../controllers/schedules/schedules.controllers"
import { checkTypeUserMiddleware } from "../middlewares/checkTypeUser.middleware"
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware"
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware"
import { scheduleSchemaRequest } from "../schemas/schedules.schemas"
import { checkDateAndHourMiddleware } from "../middlewares/checkDateAndHour.middleware"
import { checkExistsRealEstateByIdMiddleware } from "../middlewares/checkRealEstateByIdExists.middleware"

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', 
checkTokenIsValidMiddleware,
checkBodyIsValidMiddleware(scheduleSchemaRequest),
checkDateAndHourMiddleware,
checkExistsRealEstateByIdMiddleware,
createNewSchedulesController
)


export {
    schedulesRoutes
}