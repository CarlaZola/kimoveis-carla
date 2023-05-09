import { User } from "../../entities"
import { TUserResponse } from "../../interfaces/users.interfaces"
import { userRepository } from "../../utils/getRepository"

const softDeleteService = async(userId: string): Promise<void> => {

    const user: User | null = await userRepository.findOne({
        where: {
            id: +(userId)
        }
    })

   await userRepository.softRemove(user!)  
}

export {
    softDeleteService
}