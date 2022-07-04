interface CameraParams {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface RoverParams {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface RoverPhotoParams {
    id: number;
    sol: number;
    camera: CameraParams;
    img_src: string;
    earth_date: string;
    rover: RoverParams;
}

export interface UrlParamsRoverPhotos {
    roverName: string;
    cameraType: string;
}

export interface RoverPhotosForUsersParams {
    img_src: string;
    earth_date: string;
}

export interface RoverPhotoJSONFormatParams {
    photos: [RoverPhotoParams];
}
