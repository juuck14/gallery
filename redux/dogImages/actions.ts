import { REMOVE_DOG_IMAGE, REQUEST_DOG_IMAGE, REQUEST_DOG_IMAGE_FAILURE, REQUEST_DOG_IMAGE_SUCCESS, SAVE_DOG_IMAGE, COMMENT_DOG_IMAGE } from './types'

export const saveDogImage = (image: string) =>{
    return {
        type: SAVE_DOG_IMAGE,
        payload: image
    }
}
export const removeDogImage = (image: string) =>{
    return {
        type: REMOVE_DOG_IMAGE,
        payload: image
    }
}

const requestDogImageSuccess = (images: any) =>{
    return {
        type: REQUEST_DOG_IMAGE_SUCCESS,
        payload: images
    }
}

const requestDogImageFailure = (error: any) =>{
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

export const commentDogImage = (url: string, comment: string) =>{
    return {
        type: COMMENT_DOG_IMAGE,
        payload: {
            url: url,
            comment: comment
        }
    }
}
export const fetchDogImage = () =>{
    return (dispatch: any) => {
        dispatch(requestDogImage())
        fetch('https://dog.ceo/api/breeds/image/random/60')
        .then(response => response.json())
        .then(data => dispatch(requestDogImageSuccess(data.message)))
        .catch(error => dispatch(requestDogImageFailure(error)))
    }
}