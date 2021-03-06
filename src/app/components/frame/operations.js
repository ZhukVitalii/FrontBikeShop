import fetch from 'cross-fetch';
import {Creators} from '../../duck/actions';

const frameSize = Creators.frameSize;
const bikeType = Creators.bikeType;
const requestFrameJsonAction = Creators.requestFrameJson;
const receiveFrameJsonAction = Creators.receiveFrameJson;
const showForkComponent = Creators.showForkComponent;


const fetchFrameJson = (request) => {
    return dispatch => {

        dispatch(requestFrameJsonAction(request));
        return fetch('http://localhost:8080/frame/search',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'bikeTypeId': request.typeId,
                'bikeType': request.type,
                'frameSize': request.frameSize,
                'wheelsDiamId' : request.wheelsDiamId,
                'manufacturerId' : request.manufacturerId,
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
    fetchFrameJson,
    showForkComponent: showForkComponent
}
