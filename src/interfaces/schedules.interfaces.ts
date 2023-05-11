import { z } from "zod";
import { scheduleSchemaRequest } from "../schemas/schedules.schemas";

type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>


export {
    TScheduleRequest
}