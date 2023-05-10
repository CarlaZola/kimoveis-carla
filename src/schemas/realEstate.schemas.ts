import { z } from "zod";
import { addressSchema } from "./address.schemas";

const realEstateSchema = z.object({
    id: z.number(),
    value:  z.number().or(z.string()).default(0),
    size: z.number().int(),
    address: z.object({
        address: addressSchema
    }),
    categoryId: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

export {
    realEstateSchema
}