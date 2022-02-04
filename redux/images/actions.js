import {SAVE_IMAGE, REMOVE_IMAGE} from './types'

export const saveImage = (image) =>{
    return {
        type: SAVE_IMAGE,
        payload: image
    }
}

export const removeImage = () =>{
    return {
        type: REMOVE_IMAGE
    }
}