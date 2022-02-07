import { REMOVE_IMAGE, REQUEST_IMAGE, REQUEST_IMAGE_FAILURE, REQUEST_IMAGE_SUCCESS, SAVE_IMAGE } from './types'

export const saveImage = (image) =>{
    return {
        type: SAVE_IMAGE,
        payload: image
    }
}
export const removeImage = (image) =>{
    return {
        type: REMOVE_IMAGE,
        payload: image
    }
}

const requestImageSuccess = (images) =>{
    return {
        type: REQUEST_IMAGE_SUCCESS,
        payload: images
    }
}

const requestImageFailure = (error) =>{
    return {
        type: REQUEST_IMAGE_FAILURE,
        payload: error
    }
}

const requestImage = () =>{
    return {
        type: REQUEST_IMAGE
    }
}
export const fetchImage = () =>{
    return (dispatch) => {
        dispatch(requestImage())
        fetch('https://dog.ceo/api/breed/hound/images/random/60')
        .then(response => response.json())
        .then(data => dispatch(requestImageSuccess(data.message)))
        .catch(error => dispatch(requestImageFailure()))
    }
}