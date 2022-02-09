import { COMMENT_DOG_IMAGE, REMOVE_DOG_IMAGE, REQUEST_DOG_IMAGE, REQUEST_DOG_IMAGE_FAILURE, REQUEST_DOG_IMAGE_SUCCESS, SAVE_DOG_IMAGE } from './types'

const initialState: any = {
    images:[],
    savedImages:[],
    comments:{},
    loading: false,
    err: null
}
const dogImageReducer = (state=initialState, action: any) =>{
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
            const newImages = state.savedImages.filter((a: any) => a !== action.payload);
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
        case COMMENT_DOG_IMAGE:
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

export default dogImageReducer;