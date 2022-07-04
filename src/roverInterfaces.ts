interface cameraParams {
    id: number,
    name: string,
    rover_id: number,
    full_name: string
}

interface roverParams {
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string
}

export interface roverPhotoParams {
    id: number,
    sol: number,
    camera: cameraParams,
    img_src: string,
    earth_date: string,
    rover: roverParams
}

export interface urlParamsRoverPhotos {
    roverName: string,
    cameraType: string
}

export interface roverPhotosForUsersParams {
    img_src: string,
    earth_date: string
}

export interface roverPhotoJSONFormatParams {
    photos: [roverPhotoParams]
}
