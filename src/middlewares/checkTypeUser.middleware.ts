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
        if(!admin && req.baseUrl === '/users'){ 

            if(req.method ==='GET' || req.method === 'DELETE'){
                throw new AppError('Insufficient permission', 403)
            }

            if(!admin && idUser === +(id) && req.method === 'PATCH'){
                return next()
                
            }else{
                throw new AppError('Insufficient permission', 403)
            }

        }
        if(!admin && req.baseUrl === '/categories' && req.method === 'POST'){
            throw new AppError('Insufficient permission', 403)
        }
        if(!admin && req.baseUrl === '/realEstate' && req.method === 'POST'){
            throw new AppError('Insufficient permission', 403)
        }
        if(!admin && req.baseUrl === '/schedules' && req.method === 'GET'){
            throw new AppError('Insufficient permission', 403)
        }
       
        throw new AppError('Invalid signature', 401)   
    }

    return next()
}

export {
    checkTypeUserMiddleware
}