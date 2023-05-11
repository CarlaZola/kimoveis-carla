import { Request, Response } from "express";
import { createNewAddressService } from "../../services/address/createNewAddress.service";
import { createNewRealEstateService } from "../../services/realEstate/createNewRealEstate.service";
import { readAllRealEstatesService } from "../../services/realEstate/readAllRealEstates.service";
import { TArrayRealEstateResponse } from "../../interfaces/realEstate.interfaces";

const createNewRealEstateController = async(req: Request, res: Response): Promise<Response> => {

    const realEstate = await createNewRealEstateService(req.body)

    return res.status(201).json(realEstate)

}

const readAllRealEstatesController = async(req: Request, res: Response): Promise<Response> => {

    const realEstatesArray: TArrayRealEstateResponse = await readAllRealEstatesService()

    return res.json(realEstatesArray)
}

export {
    createNewRealEstateController,
    readAllRealEstatesController
}