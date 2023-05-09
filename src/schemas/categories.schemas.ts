import { z } from "zod";

const categorySchema = z.object({
    name: z.string().max(45),
    id: z.number()
})

const categorySchemaRequest = categorySchema.omit({id: true})

const allCategoriesSchemaResponse = z.array(categorySchema)

export {
    categorySchema,
    categorySchemaRequest,
    allCategoriesSchemaResponse
}