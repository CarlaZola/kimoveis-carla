import { Request, Response } from "express";
import { createNewSchedulesService } from "../../services/schedules/createNewSchedules.service";
import { readRealEstateScheduleService } from "../../services/schedules/readRealEstateSchedules.service";

const createNewSchedulesController = async(req: Request, res: Response): Promise<Response> => {
    const { idUser } = res.locals.token

    const newSchedule = await createNewSchedulesService(req.body, idUser)

    return res.status(201).json(newSchedule)
}

const readRealEstateSchedulesController  = async(req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    
    const realEstateSchedules = await readRealEstateScheduleService(id)

    return res.json(realEstateSchedules)
}

export {
    createNewSchedulesController,
    readRealEstateSchedulesController
}