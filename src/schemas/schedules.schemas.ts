import { isWeekend } from "date-fns";
import path from "path";
import { z } from "zod";
import { userSchemaResponse } from "./users.schemas";
import { realEstateSchemaResponse } from "./realEstate.schemas";


const scheduleSchemaRequest = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive()
})

const createdScheduleResponse = z.object({
    message: z.string()
})

const scheduleSchemaResponse = scheduleSchemaRequest.omit({realEstateId: true}).extend({
    id: z.number(),
    user: userSchemaResponse
})

const arraySchedules = z.array(scheduleSchemaResponse)


const realEstateScheduleResponse = realEstateSchemaResponse.extend({
    schedules: arraySchedules
})

export {
    scheduleSchemaRequest,
    realEstateScheduleResponse,
    createdScheduleResponse
}