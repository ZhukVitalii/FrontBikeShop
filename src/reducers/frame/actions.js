import * as types from './types';

//export const fetchFrameSize = data => ({ type: types.FRAME_SIZE, payload: data });
//export const fetchBikeType = data => ({ type: types.BIKE_TYPE, payload: data });

import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    frameSize: ['value'],
    bikeType: ['value'],
    requestFrameJson: ['frame'],
    receiveFrameJson: ['frameData']
});

export { Creators, Types };