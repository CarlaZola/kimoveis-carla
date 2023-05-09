import { Request, Response } from "express"
import { TAllUsersArrayResponse, TUserResponse } from "../../interfaces/users.interfaces"
import { createNewUserService } from "../../services/users/createNewUser.service"
import { softDeleteService } from "../../services/users/softDeleteUser.service"
import { readAllUsersService } from "../../services/users/readUsers.service"
import { User } from "../../entities"
import { updateUserService } from "../../services/users/updateUser.service"

const createNewUserController = async(req: Request, res: Response): Promise<Response> => {

    const newUser: TUserResponse = await createNewUserService(req.body) 

    return res.status(201).json(newUser)
}

const softDeleteUserController = async(req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    await softDeleteService(id)

    return res.status(204).send()
}

const readUsersControllers = async(req: Request, res: Response): Promise<Response> => {

    const users = await readAllUsersService() 

    return res.json(users)
}

const updateUserController = async(req: Request, res: Response): Promise<Response> => {

    const userUpdated = await updateUserService(req.body, req.params.id)

    return res.json(userUpdated)
}

export {
    createNewUserController,
    softDeleteUserController,
    readUsersControllers,
    updateUserController
}