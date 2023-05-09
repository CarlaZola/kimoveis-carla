import { z } from "zod";
import { categorySchema, allCategoriesSchemaResponse, categorySchemaRequest } from "../schemas/categories.schemas";


type TCategoryResponse = z.infer<typeof categorySchema>
type TCategoryRequest = z.infer<typeof categorySchemaRequest>
type TAllCategoriesResponse = z.infer<typeof allCategoriesSchemaResponse>

export {
    TCategoryResponse,
    TCategoryRequest,
    TAllCategoriesResponse
}