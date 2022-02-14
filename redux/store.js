import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import catImageReducer from './catImages/reducer';
import dogImageReducer from './dogImages/reducer';
import pageInfoReducer from './pageInfo/reducer';

const rootReducer = combineReducers({
    cat : catImageReducer, 
    dog : dogImageReducer,
    pageInfo: pageInfoReducer
})

const middleware = [logger, thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store