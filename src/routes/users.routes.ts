import { Router } from "express";
import { createNewUserController } from "../controllers/users/users.controller";
import { userSchemaRequest } from "../schemas/users.schemas";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";

const userRoutes: Router = Router()

userRoutes.post('', 
checkBodyIsValidMiddleware(userSchemaRequest), 
createNewUserController)


export {
    userRoutes
}