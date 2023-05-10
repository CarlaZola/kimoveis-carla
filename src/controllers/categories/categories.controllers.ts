import { Request, Response } from "express";
import { createNewCategoryService } from "../../services/categories/createNewCategory.service";
import { readAllCategoriesService } from "../../services/categories/readAllCategories.service";
import { TAllCategoriesResponse, TCategoryAndRealEstatesResponses } from "../../interfaces/categories.interfaces";
import { readCategoryAndRealEstateByIdService } from "../../services/categories/readCategoryAndRealEstateById.service";

const createNewCategoryController = async (req: Request, res: Response):Promise<Response> => {

    const category = await createNewCategoryService(req.body)
 
    return res.status(201).json(category)
}  

const readAllCategoriesController = async (req: Request, res: Response):Promise<Response> => {

    const categories: TAllCategoriesResponse = await readAllCategoriesService()

    return res.json(categories)
}

const readCategoryAndRealEstateByIdController =  async (req: Request, res: Response):Promise<Response> => {

    const { id } = req.params

    const categoryAndRealEstates = await readCategoryAndRealEstateByIdService(id)

    console.log(categoryAndRealEstates)
    return res.json(categoryAndRealEstates)
}

export {
    createNewCategoryController,
    readAllCategoriesController,
    readCategoryAndRealEstateByIdController
}