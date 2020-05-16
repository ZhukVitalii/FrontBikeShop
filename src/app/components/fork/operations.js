import fetch from 'cross-fetch';
import {Creators} from '../../duck/actions';

const requestForkJsonAction = Creators.requestForkJson;
const receiveForkJsonAction = Creators.receiveForkJson;
const showForkComponent = Creators.showForkComponent;
const fetchForkJson = (payload) => {
    return dispatch => {

        dispatch(requestForkJsonAction(payload));
        return fetch('http://localhost:8080/fork/search',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'bikeTypeId': payload.bikeTypeId,
                'bikeType': payload.bikeType,
                'wheelsDiamId' : payload.wheelsDiamId,
                'manufacturerId' : payload.manufacturerId,
                'itemsPerPage': '5',
                'page':'0'
            }),
        }).then(response => response.json())
            .then(json => {
                const responseData = json;
                let data = [];

                responseData.resultResponse.forEach(fork => {
                    data.push(fork);
                    return null;
                });
                dispatch(receiveForkJsonAction(data))
            });
    }
};

export default {
    fetchForkJson,
    showForkComponent: showForkComponent
}
