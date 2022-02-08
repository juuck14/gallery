import { REMOVE_CAT_IMAGE, REQUEST_CAT_IMAGE, REQUEST_CAT_IMAGE_SUCCESS, REQUEST_CAT_IMAGE_FAILURE, SAVE_CAT_IMAGE } from './types'

const initialState = {
    images:[],
    savedImages:[],
    loading: false,
    err: null
}
const catImageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SAVE_CAT_IMAGE:
            if(state.savedImages.includes(action.payload)) {
                return state
            } else{
                return {
                    ...state,
                    savedImages:[...state.savedImages, action.payload]
                }
            }

        case REMOVE_CAT_IMAGE:
            const newImages = state.savedImages.filter(a => a !== action.payload);
            return {
                ...state,
                savedImages: newImages
            }
        
        case REQUEST_CAT_IMAGE:
            return {
                ...state,
                loading: true
            }
        
        case REQUEST_CAT_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload,
                loading: false
            }    
        case REQUEST_CAT_IMAGE_FAILURE:
            return {
                ...state,
                err: action.payload,
                loading: false
            }    
        default: return state
    }
}

export default catImageReducer;