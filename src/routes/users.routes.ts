import { Router } from "express";
import { createNewUserController, readUsersControllers, softDeleteUserController, updateUserController } from "../controllers/users/users.controller";
import { updateUserSchemaRequest, userSchemaRequest } from "../schemas/users.schemas";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { checkIfEmailAlreadyExistsMiddleware } from "../middlewares/checkIfEmailAlreadyExists.middleware";
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware";
import { checkUserByIdMiddleware } from "../middlewares/checkUserById.middleware";
import { checkUserIsAdminMiddleware } from "../middlewares/checkUserIsAdmin.middleware";
import { checkTokenIsUserOrAdminMiddleware } from "../middlewares/checkTokenIsUserOrAdmin.middleware";

const userRoutes: Router = Router()

userRoutes.post('', 
checkBodyIsValidMiddleware(userSchemaRequest), 
checkIfEmailAlreadyExistsMiddleware,
createNewUserController)

userRoutes.get('', 
checkTokenIsValidMiddleware, 
checkUserIsAdminMiddleware,
readUsersControllers)

userRoutes.delete('/:id', 
checkTokenIsValidMiddleware,
checkUserByIdMiddleware,
checkUserIsAdminMiddleware,
softDeleteUserController)

userRoutes.patch('/:id',
checkBodyIsValidMiddleware(updateUserSchemaRequest),
checkTokenIsValidMiddleware,
checkUserByIdMiddleware,
checkTokenIsUserOrAdminMiddleware,
updateUserController
)

export {
    userRoutes
}