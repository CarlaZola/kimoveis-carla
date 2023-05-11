import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const checkDateAndHourMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response| void> => {

    let { date, hour, realEstateId } = req.body

    const day = new Date(date)
    const isWeekend = day.getDay()
    const isBusinessHours = +(hour.split(':').shift())

    
    if(isBusinessHours < 8 || isBusinessHours >= 18){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
    }

    if(isWeekend == 0 || isWeekend == 6){
        throw new AppError('Invalid date, work days are monday to friday', 400)
    }
    
    return next()

}

export {
    checkDateAndHourMiddleware
}