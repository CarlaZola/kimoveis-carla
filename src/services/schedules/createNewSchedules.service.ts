import { AppError } from "../../errors";
import { TScheduleRequest } from "../../interfaces/schedules.interfaces";
import { realEstateRepository, schedulesRepository, userRepository } from "../../utils/getRepository";

const createNewSchedulesService = async(schedulesData: TScheduleRequest, idUser: number) => {

    const { date, hour, realEstateId } = schedulesData

    const existingScheduleByUser = await schedulesRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', { date: date })
    .andWhere('schedule.hour = :hour', { hour: hour })
    .andWhere('schedule.userId = :userId', { userId: idUser })
    .getOne();

    if(existingScheduleByUser) {
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    }

    const existingScheduleByRealEstate = await schedulesRepository
    .createQueryBuilder('schedule')
    .where('schedule.realEstateId = :realEstateId', { realEstateId: realEstateId })
    .andWhere('schedule.date = :date', { date: date  })
    .andWhere('schedule.hour = :hour', {  hour: hour })
    .getOne();

    if(existingScheduleByRealEstate){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    }

    const realEstate = await realEstateRepository.findOneBy({id: realEstateId}) 
    const user =  await userRepository.findOneBy({id: idUser})

    const newSchedule = schedulesRepository.create({
        ...schedulesData,
        realEstate: realEstate!,
        user: user!
    })
    await schedulesRepository.save(newSchedule)

    return { message: 'Schedule created'}
}

export {
    createNewSchedulesService
}