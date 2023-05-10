import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";

const categorySchema = z.object({
    name: z.string().max(45),
    id: z.number()
})

const categorySchemaRequest = categorySchema.omit({id: true})

const allCategoriesSchemaResponse = z.array(categorySchema)

const realEstateArraySchema = z.array(realEstateSchema.omit({address: true, categoryId: true}))

const categoryAndRealEstatesSchemaResponse = categorySchema.extend({
    realEstate: realEstateArraySchema
})

export {
    categorySchema,
    categorySchemaRequest,
    allCategoriesSchemaResponse,
    categoryAndRealEstatesSchemaResponse
}