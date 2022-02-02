import {SAVE_IMAGE, REMOVE_IMAGE} from './types'

export const saveImage = () =>{
    return {
        type: SAVE_IMAGE
    }
}

export const removeImage = () =>{
    return {
        type: REMOVE_IMAGE
    }
}