import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

type TResLocalsToken = {
    admin: boolean
    idUser: number
}

const checkTypeUserMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void > => {

    const { admin } : TResLocalsToken= res.locals.token
    const { idUser }: TResLocalsToken = res.locals.token
    const { id } = req.params

    if(!admin){
        if(!admin && idUser === +(id)){
            return next()
        }
        throw new AppError('Invalid signature', 401)
    }

    console.log(req.baseUrl, req.path, req.method)
}

export {
    checkTypeUserMiddleware
}