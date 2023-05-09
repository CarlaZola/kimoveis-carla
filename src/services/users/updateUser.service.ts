import { User } from "../../entities";
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { userRepository } from "../../utils/getRepository";

const updateUserService = async(userData: TUserUpdateRequest, idUser: string): Promise<TUserResponse> => {

    const userBefore: User | null = await userRepository.findOneBy({id: +(idUser)})

    const userWithUpdatedData = userRepository.create({
        ...userBefore, 
        ...userData
    })

    const userUpdate = await userRepository.save(userWithUpdatedData)

    const returnUser = userSchemaResponse.parse(userUpdate)

    return returnUser
}

export {
    updateUserService
}