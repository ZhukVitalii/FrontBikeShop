import { combineReducers } from 'redux';
import  headerReducer  from './app/header/duck/reducer'
import  frameReducer  from './app/frame/duck/reducer'

const rootReducer = combineReducers({
    headerReducer: headerReducer,
    frameReducer: frameReducer
});

export default rootReducer;