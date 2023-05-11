import { Request, Response } from "express";
import { createNewSchedulesService } from "../../services/schedules/createNewSchedules.service";

const createNewSchedulesController = async(req: Request, res: Response): Promise<Response> => {
    const { idUser } = res.locals.token

    const newSchedule = await createNewSchedulesService(req.body, idUser)

    return res.status(201).json(newSchedule)
}

export {
    createNewSchedulesController
}