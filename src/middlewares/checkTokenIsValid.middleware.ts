import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken"

type TTokenRequest = {
    authorization?: string | undefined 
}

const checkTokenIsValidMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    let { authorization }: TTokenRequest = req.headers

    if(!authorization) throw new AppError('Missing bearer token', 401)

    authorization = authorization.split(' ')[1]

    jwt.verify(authorization, String(process.env.SECRET_KEY), (err: any, decoded: any) => {
        if(err){
            throw new AppError(err.message, 401)
        }

        res.locals.token = {
            idUSer: +(decoded.sub),
            admin: decoded.admin
        }
    })

    return next()
}

export {
    checkTokenIsValidMiddleware
}