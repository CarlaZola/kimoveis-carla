import { Router } from "express";
import { createNewUserController } from "../controllers/users/users.controller";
import { userSchemaRequest } from "../schemas/users.schemas";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { checkIfEmailAlreadyExistsMiddleware } from "../middlewares/checkIfEmailAlreadyExists.middleware";
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware";
import { checkTypeUserMiddleware } from "../middlewares/checkTypeUser.middleware";

const userRoutes: Router = Router()

userRoutes.post('', 
checkBodyIsValidMiddleware(userSchemaRequest), 
checkIfEmailAlreadyExistsMiddleware,
createNewUserController)

userRoutes.get('', checkTokenIsValidMiddleware, checkTypeUserMiddleware)

export {
    userRoutes
}