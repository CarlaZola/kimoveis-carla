import { NextFunction, Request, Response } from "express";
import { categoryRepository } from "../utils/getRepository";
import { AppError } from "../errors";

const checkCategoryById = async(req: Request, res:Response, next: NextFunction): Promise<Response| void> => {

    const { id } = req.params

    const categoryId: boolean | null  = await categoryRepository.exist({
        where: {
            id: +(id)
        }
    })

    if(!categoryId) {
        throw new AppError('Category not found', 404)
    }


    return next()
}

export {
    checkCategoryById
}