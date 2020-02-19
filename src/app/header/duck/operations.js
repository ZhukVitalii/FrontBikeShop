import fetch from 'cross-fetch';
import {Creators} from '../../duck/actions';

const frameSize = Creators.frameSize;
const bikeType = Creators.bikeType;
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
                'bikeTypeId': frame.typeId,
                'bikeType': frame.type,
                'frameSizeId': frame.frameSizeId,
                'itemsPerPage': '5',
                'page':'0'
            }),
        }).then(response => response.json())
            .then(json => {
                const responseData = json;
                let data = [];

                responseData.resultResponse.forEach(frame => {
                    // const frameData = {
                    //     frameId: frame.frameId,
                    //     bikeType: frame.bikeType
                    // };
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
    showFrameComponent
}
