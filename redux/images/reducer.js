import { REMOVE_IMAGE, REQUEST_IMAGE, REQUEST_IMAGE_SUCCESS, SAVE_IMAGE } from './types'

const initialState = {
    images:[],
    savedImages:[],
    loading: false,
    err: null
}
const imageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SAVE_IMAGE:
            if(state.savedImages.includes(action.payload)) {
                return state
            } else{
                return {
                    ...state,
                    savedImages:[...state.savedImages, action.payload]
                }
            }

        case REMOVE_IMAGE:
            const newImages = state.savedImages.filter(a => a !== action.payload);
            return {
                ...state,
                savedImages: newImages
            }
        
        case REQUEST_IMAGE:
            return {
                ...state,
                loading: true
            }
        
        case REQUEST_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload,
                loading: false
            }    
        case REQUEST_IMAGE_SUCCESS:
            return {
                ...state,
                err: action.payload,
                loading: false
            }    
        default: return state
    }
}

export default imageReducer;