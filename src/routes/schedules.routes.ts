import { Router } from "express"
import { createNewSchedulesController, readRealEstateSchedulesController } from "../controllers/schedules/schedules.controllers"
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware"
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware"
import { scheduleSchemaRequest } from "../schemas/schedules.schemas"
import { checkDateAndHourMiddleware } from "../middlewares/checkDateAndHour.middleware"
import { checkExistsRealEstateByIdMiddleware } from "../middlewares/checkRealEstateByIdExists.middleware"
import { checkRealEstateExistsMiddleware } from "../middlewares/checkRealEstateByIdParams.middleware"
import { checkUserIsAdminMiddleware } from "../middlewares/checkUserIsAdmin.middleware"

const schedulesRoutes: Router = Router()

schedulesRoutes.post('', 
checkTokenIsValidMiddleware,
checkBodyIsValidMiddleware(scheduleSchemaRequest),
checkDateAndHourMiddleware,
checkExistsRealEstateByIdMiddleware,
createNewSchedulesController
)

schedulesRoutes.get('/realEstate/:id',
checkTokenIsValidMiddleware,
checkUserIsAdminMiddleware,
checkRealEstateExistsMiddleware,
readRealEstateSchedulesController
)


export {
    schedulesRoutes
}