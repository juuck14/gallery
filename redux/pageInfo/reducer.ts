import { MOVE_PAGE } from './types';

const initialState: any = {
    currentPage: "",
    title: ""
}
const pageInfoReducer = (state=initialState, action: any) =>{
    switch(action.type){
        case MOVE_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
                title: action.payload.title
            }

        default: return state
    }
}

export default pageInfoReducer;