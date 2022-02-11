import { REMOVE_CAT_IMAGE, REQUEST_CAT_IMAGE, REQUEST_CAT_IMAGE_SUCCESS, REQUEST_CAT_IMAGE_FAILURE, SAVE_CAT_IMAGE, COMMENT_CAT_IMAGE } from './types'

const initialState: any = {
    images:[],
    savedImages:[],
    comments:{},
    loading: false,
    err: null
}
const catImageReducer = (state=initialState, action: any) =>{
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
            const newImages = state.savedImages.filter((a: any) => a !== action.payload);
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
        case COMMENT_CAT_IMAGE:
            console.log(state.comments[action.payload.url])
            return {
                ...state,
                comments:{
                    ...state.comments,
                    [action.payload.url]: state.comments[action.payload.url]?
                        [
                            ...state.comments[action.payload.url],
                            {
                                content: action.payload.comment,
                                name: "John Doe",
                                datetime: new Date()
                            }
                        ]:[
                            {
                                content: action.payload.comment,
                                name: "John Doe",
                                datetime: new Date()
                            }
                        ]
                }
            }  
        default: return state
    }
}

export default catImageReducer;