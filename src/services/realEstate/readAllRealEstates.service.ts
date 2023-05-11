import { TArrayRealEstateResponse } from "../../interfaces/realEstate.interfaces"
import { realEstateRepository } from "../../utils/getRepository"

const readAllRealEstatesService = async(): Promise<TArrayRealEstateResponse> => {

    const estates = await realEstateRepository.find({
        relations:{
            address: true
        }
    })

    return estates
}

export {
    readAllRealEstatesService
}