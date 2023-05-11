import { TSchedulesRealEstateResponse } from "../../interfaces/schedules.interfaces"
import { realEstateScheduleResponse } from "../../schemas/schedules.schemas"
import { realEstateRepository } from "../../utils/getRepository"

const readRealEstateScheduleService = async(idRealEstate: string) => {

    const realEstates = await realEstateRepository.createQueryBuilder('real_estate')
    .innerJoinAndSelect('real_estate.category', 'category')
    .innerJoinAndSelect('real_estate.address', 'address')
    .innerJoinAndSelect('real_estate.schedules', 'schedule')
    .innerJoinAndSelect('schedule.user', 'user')
    .where('schedule."realEstateId" = :id', { id: idRealEstate })
    .getOne()

   
    return realEstates
}

export {
    readRealEstateScheduleService
}