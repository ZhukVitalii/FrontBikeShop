import { combineReducers } from 'redux';
import  headerReducer  from './app/components/header/duck/reducer'
import  frameReducer  from './app/components/frame/duck/reducer'

const rootReducer = combineReducers({
    headerReducer: headerReducer,
    frameReducer: frameReducer
});

export default rootReducer;
