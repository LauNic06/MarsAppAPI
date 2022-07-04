import {default as axios} from "axios";
import {
    UrlParamsRoverPhotos,
    RoverPhotoParams,
    RoverPhotosForUsersParams,
    RoverPhotoJSONFormatParams
} from "./roverInterfaces";

const URL_BASE = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const URL_API = 'api_key=JNR9awxzjUepQol1eiBftwJUzy8x706n11max7GA';

export async function getRoverFromNASA() {
    let response = await axios.get(URL_BASE + "?" + URL_API);
    return response.data;
}

export async function getRoverPhotosFromNASA(params: UrlParamsRoverPhotos) {
    const urlForRoverPhotos = URL_BASE + "/" + params.roverName + "/" + "photos?sol=1000&camera=" + params.cameraType + "&" + URL_API;
    let response: RoverPhotoJSONFormatParams = (await axios.get(urlForRoverPhotos)).data;
    let photos: [RoverPhotoParams] = response.photos;
    let photosForUser: Array<RoverPhotosForUsersParams> = [] as Array<RoverPhotosForUsersParams>;

    photos.map(photo => photosForUser.push({img_src: photo.img_src, earth_date: photo.earth_date}));

    return photosForUser;
}
