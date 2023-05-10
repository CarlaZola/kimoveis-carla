import { createQueryBuilder } from "typeorm"
import { Category } from "../../entities"
import { TCategoryAndRealEstatesResponses } from "../../interfaces/categories.interfaces"
import { categoryAndRealEstatesSchemaResponse } from "../../schemas/categories.schemas"
import { categoryRepository } from "../../utils/getRepository"


const readCategoryAndRealEstateByIdService = async(categoryId: string): Promise<TCategoryAndRealEstatesResponses> => {

    const categoryAndRealEstates: Category | null = await categoryRepository.findOne({
        where: {
            id: +(categoryId)
        },
        relations: {
            realEstate: true
        }
    })

    const returnCategory: TCategoryAndRealEstatesResponses = categoryAndRealEstatesSchemaResponse.parse(categoryAndRealEstates)

    return returnCategory
    
}

export {
    readCategoryAndRealEstateByIdService
}