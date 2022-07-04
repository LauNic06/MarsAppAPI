import {getRoverFromNASA, getRoverPhotosFromNASA} from "./servicesForNasaAPI";

export const getRoverHandler = async (req: any, res: any) => {
    const response = await getRoverFromNASA();
    res.send(response);
}

export const getRoversPhotosHandler = async (req: any, res: any) => {
    const response = await getRoverPhotosFromNASA(req.params);
    res.send(response);
}
