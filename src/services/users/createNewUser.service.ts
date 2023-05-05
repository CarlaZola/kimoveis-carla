import { User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { userRepository } from "../../utils/getRepository";

const createNewUserService = async (userData: TUserRequest): Promise<TUserResponse> => {

    const newUser: User = userRepository.create(userData)
    await userRepository.save(newUser)

    const userCreated = userSchemaResponse.parse(newUser) 
   
    return userCreated

}   

export {
    createNewUserService
}
