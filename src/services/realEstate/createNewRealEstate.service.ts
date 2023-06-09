import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { TRealEstateRequest, TRealEstateResponse } from "../../interfaces/realEstate.interfaces"
import { categoryRepository, realEstateRepository } from "../../utils/getRepository"
import { createNewAddressService } from "../address/createNewAddress.service"

const createNewRealEstateService = async(realEstateData: TRealEstateRequest): Promise<TRealEstateResponse> => {
    
    const createdAddress = await createNewAddressService(realEstateData)
  
    const { categoryId, ...rest } = realEstateData

    const category: Category | null = await categoryRepository.findOneBy({id: categoryId!})

    if(!category){
        throw new AppError('Category not found', 404)
    }

    const createdNewRealEstate: RealEstate = realEstateRepository.create({
        ...rest,
        address: createdAddress,
        category
    })

    const returnRealEstate = await realEstateRepository.save(createdNewRealEstate)

    return returnRealEstate
    
}

export {
    createNewRealEstateService
}