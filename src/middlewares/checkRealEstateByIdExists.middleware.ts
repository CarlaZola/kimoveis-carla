import { NextFunction, Request, Response } from "express";
import { realEstateRepository } from "../utils/getRepository";
import { RealEstate } from "../entities";
import { AppError } from "../errors";

const checkExistsRealEstateByIdMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response| void> => {

    const { realEstateId, ...rest } = req.body

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({id: realEstateId})

    if(!realEstate){
        throw new AppError('RealEstate not found', 404)
    }

    return next()
}

export {
    checkExistsRealEstateByIdMiddleware
}