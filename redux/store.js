import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import imageReducer from './images/reducer';

const middleware = [logger, thunk]

const store = createStore(imageReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store