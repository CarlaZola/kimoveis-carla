import { Address } from "../../entities";
import { AppError } from "../../errors";
import { TAddressRequest, TAddressResponse } from "../../interfaces/address.interfaces";
import { TRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { addressRepository } from "../../utils/getRepository";

const createNewAddressService = async(realEstateAddress: TRealEstateRequest): Promise<TAddressResponse> => {

    const { street, zipCode, number, city, state }: TAddressRequest = realEstateAddress.address

    let address: TAddressRequest | null

    if(number){
        address =  await addressRepository.findOne({ where: {
                street: street,
                zipCode: zipCode,
                state: state,
                city: city,
                number: number
            }})
    }else{
        address = await addressRepository.findOne({ where: {
                street: street,
                zipCode: zipCode,
                state: state,
                city: city
        }})
    }

    if(address) {
		throw new AppError('Address already exists', 409)
	}

    const createNewAddress: Address = addressRepository.create(realEstateAddress.address)  

    const newAddress = await addressRepository.save(createNewAddress)
    
    return newAddress
}

export {
    createNewAddressService
}