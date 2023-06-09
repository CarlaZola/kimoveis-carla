import { NextFunction, Request, Response } from "express";
import { userRepository } from "../utils/getRepository";
import { AppError } from "../errors";

const checkIfEmailAlreadyExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const { email } = req.body

    const emailUser: boolean = await userRepository.exist({
        where: {
            email: email
        }
    })

    if(emailUser){
        throw new AppError('Email already exists', 409)
    }

    return next()

}


export {
    checkIfEmailAlreadyExistsMiddleware
}