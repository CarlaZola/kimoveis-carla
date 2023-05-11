import { z } from "zod";
import { createdScheduleResponse, realEstateScheduleResponse, scheduleSchemaRequest } from "../schemas/schedules.schemas";

type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>
type TSchedulesRealEstateResponse = z.infer<typeof realEstateScheduleResponse>
type TScheduleResponse = z.infer<typeof createdScheduleResponse>

export {
    TScheduleRequest,
    TSchedulesRealEstateResponse,
    TScheduleResponse
}