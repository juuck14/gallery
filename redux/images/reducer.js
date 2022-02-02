import {SAVE_IMAGE, REMOVE_IMAGE} from './types'

const initialState = {
    count: 0,
    images:{}
}
const imageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SAVE_IMAGE:
            return {
                ...state,
                count: state.count + 1
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