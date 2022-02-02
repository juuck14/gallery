import {createStore} from 'redux'
import imageReducer from './images/reducer'

const store = createStore(imageReducer)

export default store