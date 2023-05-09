import { Router } from "express";
import { checkBodyIsValidMiddleware } from "../middlewares/checkBodyIsValid.middleware";
import { categorySchemaRequest } from "../schemas/categories.schemas";
import { checkCategoryNameExistsMiddleware } from "../middlewares/checkIfCategoryNameExists.middleware";
import { checkTokenIsValidMiddleware } from "../middlewares/checkTokenIsValid.middleware";
import { checkTypeUserMiddleware } from "../middlewares/checkTypeUser.middleware";
import { createNewCategoryController, readAllCategoriesController } from "../controllers/categories/categories.controllers";

const categoryRoutes: Router = Router()

categoryRoutes.post('', 
checkBodyIsValidMiddleware(categorySchemaRequest),
checkTokenIsValidMiddleware,
checkTypeUserMiddleware,
checkCategoryNameExistsMiddleware,
createNewCategoryController
)

categoryRoutes.get('', 
readAllCategoriesController
)

export {
    categoryRoutes
}