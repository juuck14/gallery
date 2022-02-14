import { COMMENT_CAT_IMAGE, REMOVE_CAT_IMAGE, REQUEST_CAT_IMAGE, REQUEST_CAT_IMAGE_FAILURE, REQUEST_CAT_IMAGE_SUCCESS, REQUEST_CAT_TAG_SUCCESS, SAVE_CAT_IMAGE } from './types'

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

const requestCatTagSuccess = (tags: any) =>{
    return {
        type: REQUEST_CAT_TAG_SUCCESS,
        payload: tags
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

export const fetchCatImage = (length: number, tag: number) =>{
    return async (dispatch: any) => {
        if(tag < 0){
            dispatch(requestCatImage())
            fetch('https://api.thecatapi.com/v1/images/search?limit=60')
            .then(response => response.json())
            .then(function(data) { 
                console.log(data)
                dispatch(requestCatImageSuccess(data))
                if(length === 0){
                    dispatch(requestCatImage())
                    fetch('https://api.thecatapi.com/v1/categories',{
                        headers: {
                            "x-api-key": '07905b10-560c-461a-91cb-26e786c8d1af'
                        }
                    })
                    .then(response => response.json())
                    .then(data => dispatch(requestCatTagSuccess(data)))
                    .catch(error => dispatch(requestCatImageFailure(error)))
                }
            }).catch(error => dispatch(requestCatImageFailure(error)))
        } else{
            dispatch(requestCatImage())
            fetch('https://api.thecatapi.com/v1/images/search?limit=60&category_ids=' + tag.toString())
            .then(response => response.json())
            .then(data => dispatch(requestCatImageSuccess(data)))
            .catch(error => dispatch(requestCatImageFailure(error)))
        }

    }
}
