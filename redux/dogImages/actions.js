import { REMOVE_DOG_IMAGE, REQUEST_DOG_IMAGE, REQUEST_DOG_IMAGE_FAILURE, REQUEST_DOG_IMAGE_SUCCESS, SAVE_DOG_IMAGE } from './types'

export const saveDogImage = (image) =>{
    return {
        type: SAVE_DOG_IMAGE,
        payload: image
    }
}
export const removeDogImage = (image) =>{
    return {
        type: REMOVE_DOG_IMAGE,
        payload: image
    }
}

const requestDogImageSuccess = (images) =>{
    return {
        type: REQUEST_DOG_IMAGE_SUCCESS,
        payload: images
    }
}

const requestDogImageFailure = (error) =>{
    return {
        type: REQUEST_DOG_IMAGE_FAILURE,
        payload: error
    }
}

const requestDogImage = () =>{
    return {
        type: REQUEST_DOG_IMAGE
    }
}
export const fetchDogImage = () =>{
    return (dispatch) => {
        dispatch(requestDogImage())
        fetch('https://dog.ceo/api/breed/hound/images/random/60')
        .then(response => response.json())
        .then(data => dispatch(requestDogImageSuccess(data.message)))
        .catch(error => dispatch(requestDogImageFailure()))
    }
}