import { Request, Response } from "express";
import { createLoginService } from "../../services/login/createLogin.service";
import { TLoginResponse } from "../../interfaces/login.interfaces";

const newLoginController = async(req: Request, res: Response): Promise<Response> => {

    const newSession: TLoginResponse = await createLoginService(req.body)

    return res.json(newSession)
}

export {
    newLoginController
}