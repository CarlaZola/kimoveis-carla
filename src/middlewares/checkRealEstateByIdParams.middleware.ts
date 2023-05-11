import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../utils/getRepository";
import { AppError } from "../errors";

const checkRealEstateExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id } = req.params

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({id: +(id)})

    if(!realEstate){
        throw new AppError('RealEstate not found', 404)
    }

    return next()
}

export {
    checkRealEstateExistsMiddleware
}