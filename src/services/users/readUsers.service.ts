import { User } from "../../entities";
import { TAllUsersArrayResponse } from "../../interfaces/users.interfaces";
import { readUsersSchemasResponse } from "../../schemas/users.schemas";
import { userRepository } from "../../utils/getRepository";

const readAllUsersService = async(): Promise<TAllUsersArrayResponse> => {

    const users: User[] | null = await userRepository.find()

    const returnUsers = readUsersSchemasResponse.parse(users)

    return returnUsers

}

export {
    readAllUsersService
}