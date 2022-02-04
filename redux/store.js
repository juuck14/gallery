import {createStore} from 'redux'
import imageReducer from './images/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(imageReducer, composeWithDevTools())

export default store