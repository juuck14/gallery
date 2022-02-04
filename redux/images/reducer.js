import {SAVE_IMAGE, REMOVE_IMAGE} from './types'

const initialState = {
    count: 0,
    images:[]
}
const imageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SAVE_IMAGE:
            if(state.images.includes(action.payload)) {
                return state
            } else{
                return {
                    ...state,
                    images:[...state.images, action.payload],
                    count: state.count + 1
                }
            }

        case REMOVE_IMAGE:
            return {
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}

export default imageReducer;