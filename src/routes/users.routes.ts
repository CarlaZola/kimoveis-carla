import { Router } from "express";
import { createNewUserController, readUsersControllers, softDeleteUserController, updateUserController } from "../controllers/users/users.controller";
import { updateUserSchemaRequest, userSchemaRequest } from "../schemas/users.schemas";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { checkIfEmailAlreadyExistsMiddleware } from "../middlewares/checkIfEmailAlreadyExists.middleware";
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware";
import { checkTypeUserMiddleware } from "../middlewares/checkTypeUser.middleware";
import { checkUserByIdMiddleware } from "../middlewares/checkUserById.middleware";

const userRoutes: Router = Router()

userRoutes.post('', 
checkBodyIsValidMiddleware(userSchemaRequest), 
checkIfEmailAlreadyExistsMiddleware,
createNewUserController)

userRoutes.get('', 
checkTokenIsValidMiddleware, 
checkTypeUserMiddleware,
readUsersControllers)

userRoutes.delete('/:id', 
checkTokenIsValidMiddleware,
checkUserByIdMiddleware,
checkTypeUserMiddleware,
softDeleteUserController)

userRoutes.patch('/:id',
checkBodyIsValidMiddleware(updateUserSchemaRequest),
checkTokenIsValidMiddleware,
checkUserByIdMiddleware,
checkTypeUserMiddleware,
updateUserController
)

export {
    userRoutes
}