import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export type TResLocalsToken = {
    admin: boolean
    idUser: number
}

const checkUserIsAdminMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const { admin }: TResLocalsToken  = res.locals.token

    if(!admin && req.baseUrl === '/users'){ 

        if(req.method ==='GET' || req.method === 'DELETE'){
            throw new AppError('Insufficient permission', 403)
        } 
        
        return next()
    }

    if(!admin && req.baseUrl === '/categories' && req.method ==='POST'){
        throw new AppError('Insufficient permission', 403)
    }

    if(!admin && req.baseUrl === '/realEstate' && req.method === 'POST'){
        throw new AppError('Insufficient permission', 403)
    }

    if(!admin && req.baseUrl === '/schedules' && req.method === 'GET'){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export {
    checkUserIsAdminMiddleware
}