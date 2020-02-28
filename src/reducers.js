import { combineReducers } from 'redux';
import  headerReducer  from './app/components/header/reducer'
import  frameReducer  from './app/components/frame/reducer'

const rootReducer = combineReducers({
    headerReducer: headerReducer,
    frameReducer: frameReducer
});

export default rootReducer;
