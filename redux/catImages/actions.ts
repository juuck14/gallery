import { REMOVE_CAT_IMAGE, REQUEST_CAT_IMAGE, REQUEST_CAT_IMAGE_FAILURE, REQUEST_CAT_IMAGE_SUCCESS, SAVE_CAT_IMAGE, COMMENT_CAT_IMAGE } from './types'

export const saveCatImage = (image: string) =>{
    return {
        type: SAVE_CAT_IMAGE,
        payload: image
    }
}
export const removeCatImage = (image: string) =>{
    return {
        type: REMOVE_CAT_IMAGE,
        payload: image
    }
}

const requestCatImageSuccess = (images: any) =>{
    return {
        type: REQUEST_CAT_IMAGE_SUCCESS,
        payload: images
    }
}

const requestCatImageFailure = (error: any) =>{
    return {
        type: REQUEST_CAT_IMAGE_FAILURE,
        payload: error
    }
}

const requestCatImage = () =>{
    return {
        type: REQUEST_CAT_IMAGE
    }
}

export const commentCatImage = (url: string, comment: string) =>{
    return {
        type: COMMENT_CAT_IMAGE,
        payload: {
            url: url,
            comment: comment
        }
    }
}
export const fetchCatImage = () =>{
    return (dispatch: any) => {
        dispatch(requestCatImage())
        fetch('https://api.thecatapi.com/v1/images/search?limit=60')
        .then(response => response.json())
        .then(data => dispatch(requestCatImageSuccess(data)))
        .catch(error => dispatch(requestCatImageFailure(error)))
    }
}