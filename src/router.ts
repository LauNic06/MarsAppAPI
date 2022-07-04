import express from "express";
import {getRoverHandler, getRoversPhotosHandler} from "./roverController";
import {getTestHandler} from "./testController";

export const router = express.Router();

router.get('/test', getTestHandler);
router.get('/rovers', getRoverHandler);
router.get("/rovers/:roverName/photos/:cameraType", getRoversPhotosHandler);
