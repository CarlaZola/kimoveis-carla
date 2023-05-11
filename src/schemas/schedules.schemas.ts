import { isWeekend } from "date-fns";
import path from "path";
import { z } from "zod";


const scheduleSchemaRequest = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive()
})

export {
    scheduleSchemaRequest
}