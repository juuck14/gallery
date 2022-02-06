import {createStore, applyMiddleware} from 'redux'
import imageReducer from './images/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [logger, thunk]

const store = createStore(imageReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store