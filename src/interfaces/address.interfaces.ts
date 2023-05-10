import { z } from "zod";
import { addressSchema, addressSchemaResponse } from "../schemas/address.schemas";

type TAddressRequest = z.infer<typeof addressSchema>
type TAddressResponse = z.infer<typeof addressSchemaResponse>

export {
    TAddressRequest,
    TAddressResponse
}