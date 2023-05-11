import { z } from "zod";
import { readAllRealEstate, realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse } from "../schemas/realEstate.schemas";

type TRealEstateResponse = z.infer<typeof realEstateSchemaResponse>
type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>
type TArrayRealEstateResponse = z.infer<typeof readAllRealEstate>


export {
    TRealEstateResponse,
    TRealEstateRequest,
    TArrayRealEstateResponse
}