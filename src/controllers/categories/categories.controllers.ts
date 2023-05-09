import { Request, Response } from "express";
import { createNewCategoryService } from "../../services/categories/createNewCategory.service";
import { readAllCategoriesService } from "../../services/categories/readAllCategories.service";
import { TAllCategoriesResponse } from "../../interfaces/categories.interfaces";

const createNewCategoryController = async (req: Request, res: Response):Promise<Response> => {

    const category = await createNewCategoryService(req.body)
 
    return res.status(201).json(category)
}  

const readAllCategoriesController = async (req: Request, res: Response):Promise<Response> => {

    const categories: TAllCategoriesResponse = await readAllCategoriesService()

    return res.json(categories)
}

export {
    createNewCategoryController,
    readAllCategoriesController
}