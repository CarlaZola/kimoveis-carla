import { z } from "zod";
import { realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse } from "../schemas/realEstate.schemas";

type TRealEstateResponse = z.infer<typeof realEstateSchemaResponse>
type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>


export {
    TRealEstateResponse,
    TRealEstateRequest
}