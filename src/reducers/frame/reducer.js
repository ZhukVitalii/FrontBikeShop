import types from './types';

const INITIAL_STATE = {
    bikeType: 1,
    frameSize: '',
    frameData: []
}
const frameReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.FRAME_SIZE: {
            const { value } = action;
            console.log("Set Frame Size");
            return {
                ...state,
                frameSize: value
            }
        }

        case types.BIKE_TYPE: {
            const { value } = action;
            console.log("Set Bike Type");
            return {
                ...state,
                bikeType: value
            }
        }

        case types.REQUEST_FRAME_JSON: {
            const { frame } = action;
            console.log("Send REQUEST");
            return {
                ...state,
                frame,
                frameData: []
            }
        }

        case types.RECEIVE_FRAME_JSON: {
            const { frameData } = action;
            console.log("GET RESPONSE");
            return {
                ...state,
                frameData
            }
        }

        default: return state;
    }
}

export default frameReducer;