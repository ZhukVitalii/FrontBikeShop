import fetch from 'cross-fetch';
import {Creators} from '../../duck/actions';
const frameSize = Creators.frameSize;
const bikeType = Creators.bikeType;
const wheelsSize = Creators.wheelsSize;
const requestFrameJsonAction = Creators.requestFrameJson;
const receiveFrameJsonAction = Creators.receiveFrameJson;
const showFrameComponent = Creators.showFrameComponent;



const fetchFrameJson = (frame) => {
    return dispatch => {

        dispatch(requestFrameJsonAction(frame));
        return fetch('http://localhost:8080/frame/search',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'bikeTypeId': frame.bikeTypeId,
                'bikeType': frame.bikeType,
                'frameSizeId': frame.frameSizeId,
                'frameSize': frame.frameSize,
                'wheelsDiam': frame.wheelsSize,
                'wheelsDiamId': frame.wheelsSizeId,
                'itemsPerPage': '5',
                'page':'0'
            }),
        }).then(response => response.json())
            .then(json => {
                const responseData = json;
                let data = [];

                responseData.resultResponse.forEach(frame => {
                    data.push(frame);
                    return null;
                });
                dispatch(receiveFrameJsonAction(data))
            });
    }
};

export default {
    frameSize,
    bikeType,
    wheelsSize,
    fetchFrameJson,
    showFrameComponent: showFrameComponent
}
