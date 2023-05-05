import { Router } from "express";
import { newLoginController } from "../controllers/login/login.controllers";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { loginSchemaRequest } from "../schemas/login.schema";

const loginRoutes: Router = Router()

loginRoutes.post('', 
checkBodyIsValidMiddleware(loginSchemaRequest),
newLoginController)


export { 
    loginRoutes
}