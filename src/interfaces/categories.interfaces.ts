import { z } from "zod";
import { categorySchema, allCategoriesSchemaResponse, categorySchemaRequest, categoryAndRealEstatesSchemaResponse } from "../schemas/categories.schemas";


type TCategoryResponse = z.infer<typeof categorySchema>
type TCategoryRequest = z.infer<typeof categorySchemaRequest>
type TAllCategoriesResponse = z.infer<typeof allCategoriesSchemaResponse>
type TCategoryAndRealEstatesResponses = z.infer<typeof categoryAndRealEstatesSchemaResponse>

export {
    TCategoryResponse,
    TCategoryRequest,
    TAllCategoriesResponse,
    TCategoryAndRealEstatesResponses
}