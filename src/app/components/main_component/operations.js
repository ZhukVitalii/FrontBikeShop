import fetch from 'cross-fetch';
import {Creators} from '../../duck/actions';
const requestManufacturerJson = Creators.requestManufacturerJson;
const receiveManufacturerJson = Creators.receiveManufacturerJson;



const fetchManufacturersJson = () => {
    return dispatch => {

        dispatch(requestManufacturerJson());
        return fetch('http://localhost:8080/manufacturer/get-all',{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(json => {
                const responseData = json;
                let data = [];
                responseData.forEach(manufacturer => {
                    data.push(manufacturer);
                    return null;
                });
                dispatch(receiveManufacturerJson(data))
            });
    }
};

export default {
    fetchManufacturersJson
}
