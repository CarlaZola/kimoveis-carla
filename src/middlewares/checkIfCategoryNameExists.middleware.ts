import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../utils/getRepository";
import { AppError } from "../errors";

const checkCategoryNameExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const { name } = req.body

    const categoryName: boolean | null = await categoryRepository.exist({
        where: {
            name
        }
    }) 

    if(categoryName){
        throw new AppError('Category already exists', 409)
    }

    return next()
}

export {
    checkCategoryNameExistsMiddleware
}