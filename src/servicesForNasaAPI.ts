import {default as axios} from "axios";
import {
    urlParamsRoverPhotos,
    roverPhotoParams,
    roverPhotosForUsersParams,
    roverPhotoJSONFormatParams
} from "./roverInterfaces";

const urlForRoverData = 'https://api.nasa.gov/mars-photos/api/v1/rovers?';
const urlBase = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const urlAPI = 'api_key=JNR9awxzjUepQol1eiBftwJUzy8x706n11max7GA';

export async function getRoverFromNASA() {
    let response = await axios.get(urlForRoverData + urlAPI);
    return response.data;
}

export async function getRoverPhotosFromNASA(params: urlParamsRoverPhotos) {
    const urlForRoverPhotos = urlBase + "/" + params.roverName + "/" + "photos?sol=1000&camera=" + params.cameraType + "&" + urlAPI;
    let response: roverPhotoJSONFormatParams = (await axios.get(urlForRoverPhotos)).data;
    let photos: [roverPhotoParams] = response.photos;
    let photosForUser: Array<roverPhotosForUsersParams> = [] as Array<roverPhotosForUsersParams>;

    photos.forEach(photo => {
        photosForUser.push({img_src: photo.img_src, earth_date: photo.earth_date});
    });

    return photosForUser;
}
