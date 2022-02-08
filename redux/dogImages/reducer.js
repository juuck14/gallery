import { REMOVE_DOG_IMAGE, REQUEST_DOG_IMAGE, REQUEST_DOG_IMAGE_SUCCESS,REQUEST_DOG_IMAGE_FAILURE, SAVE_DOG_IMAGE } from './types'

const initialState = {
    images:[],
    savedImages:[],
    loading: false,
    err: null
}
const dogImageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SAVE_DOG_IMAGE:
            if(state.savedImages.includes(action.payload)) {
                return state
            } else{
                return {
                    ...state,
                    savedImages:[...state.savedImages, action.payload]
                }
            }

        case REMOVE_DOG_IMAGE:
            const newImages = state.savedImages.filter(a => a !== action.payload);
            return {
                ...state,
                savedImages: newImages
            }
        
        case REQUEST_DOG_IMAGE:
            return {
                ...state,
                loading: true
            }
        
        case REQUEST_DOG_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload,
                loading: false
            }    
        case REQUEST_DOG_IMAGE_FAILURE:
            return {
                ...state,
                err: action.payload,
                loading: false
            }    
        default: return state
    }
}

export default dogImageReducer;