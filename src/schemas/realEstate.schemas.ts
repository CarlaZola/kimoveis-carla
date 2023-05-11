import { z } from "zod";
import { addressSchema, addressSchemaResponse } from "./address.schemas";
import { categorySchema, categorySchemaRequest } from "./categories.schemas";

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().default(0).or(z.string()),
    size: z.number().int().positive(),    
    address: addressSchema,
    categoryId: z.number().optional().nullish(),
    sold: z.boolean().default(false),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date())
})

const realEstateSchemaRequest = realEstateSchema.omit({id: true, createdAt: true, updatedAt: true})

const realEstateSchemaResponse = realEstateSchema.omit({categoryId: true}).extend({
    category: categorySchema,
    address: addressSchemaResponse,   
})

const readAllRealEstate = z.array(realEstateSchema.extend({
    address: addressSchemaResponse
})
.omit({categoryId: true}))

export {
    realEstateSchema,
    realEstateSchemaRequest,
    realEstateSchemaResponse,
    readAllRealEstate
}