import { Request, Response } from "express"
import { TUserResponse } from "../../interfaces/users.interfaces"
import { createNewUserService } from "../../services/users/createNewUser.service"

const createNewUserController = async(req: Request, res: Response): Promise<Response> => {

    const newUser: TUserResponse = await createNewUserService(req.body) 

    return res.status(201).json(newUser)
}


export {
    createNewUserController
}