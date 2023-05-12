import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { TResLocalsToken } from "./checkUserIsAdmin.middleware";

const checkTokenIsUserOrAdminMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void > =>{

    const { idUser }: TResLocalsToken = res.locals.token
    const { admin }: TResLocalsToken  = res.locals.token
    const { id } = req.params

    if(!admin){
        if(idUser !== +(id)){
            throw new AppError('Insufficient permission', 403)
        }

        return next()
    }

    return next()

}

export {
    checkTokenIsUserOrAdminMiddleware
}