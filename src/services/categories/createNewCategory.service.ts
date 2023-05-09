import { Category } from "../../entities";
import { TCategoryRequest, TCategoryResponse } from "../../interfaces/categories.interfaces";

import { categoryRepository } from "../../utils/getRepository";

const createNewCategoryService = async(categoryData: TCategoryRequest): Promise<TCategoryResponse> => {
  
    const newCategory: Category = categoryRepository.create(categoryData)

    const createdCategory = await categoryRepository.save(newCategory)

    return createdCategory

}

export {
    createNewCategoryService
}