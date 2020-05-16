import { combineReducers } from 'redux';
import  headerReducer  from './app/components/header/reducer'
import  frameReducer  from './app/components/frame/reducer'
import  mainComponentReducer  from './app/components/main_component/reducer'
import frameSizeReducer from './app/components/frame_size/reducer'
import wheelsSizeReducer from './app/components/wheels_size/reducer'
import forkReducer from './app/components/fork/reducer'
const rootReducer = combineReducers({
    headerReducer: headerReducer,
    frameReducer: frameReducer,
    mainComponentReducer:mainComponentReducer,
    frameSizeReducer:frameSizeReducer,
    wheelsSizeReducer:wheelsSizeReducer,
    forkReducer:forkReducer
});

export default rootReducer;
