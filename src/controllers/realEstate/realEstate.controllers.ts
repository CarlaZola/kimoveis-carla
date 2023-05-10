import { Request, Response } from "express";
import { createNewAddressService } from "../../services/address/createNewAddress.service";
import { createNewRealEstateService } from "../../services/realEstate/createNewRealEstate.service";

const createNewRealEstateController = async(req: Request, res: Response): Promise<Response | void> => {

    const realEstate = await createNewRealEstateService(req.body)

    return res.status(201).json(realEstate)

}

export {
    createNewRealEstateController
}