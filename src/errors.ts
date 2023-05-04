import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

class AppError extends Error{
    statusCode: number 

        constructor(message: string, statusCode: number){
            super(message)
            this.statusCode = statusCode 
        }
}


const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if(err instanceof AppError){
        return res.status(err.statusCode).json({message: err.message})
    }

    if(err instanceof ZodError){
        return res.status(400).json(err.flatten().fieldErrors)
    }

    console.log(err)

    return res.status(500).json({message: 'Internal Server Error.'})
}

export {
    AppError,
    handleErrors
}