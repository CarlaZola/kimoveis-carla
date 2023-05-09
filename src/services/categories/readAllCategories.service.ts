import { Category } from "../../entities"
import { TAllCategoriesResponse } from "../../interfaces/categories.interfaces"
import { categoryRepository } from "../../utils/getRepository"

const readAllCategoriesService = async(): Promise<TAllCategoriesResponse> => {

    const allCategories: Category[] | null = await categoryRepository.find()

    return allCategories

}

export {
    readAllCategoriesService
}