import types from '../../duck/types';

const INITIAL_STATE = {
    bikeType: '',
    frameSize: sessionStorage.getItem('frameSize') !== undefined ? sessionStorage.getItem('frameSize') : '',
    frameData: '',
    showWheelsSizeComponent: ''
};
const frameSizeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.FRAME_SIZE: {
            const { value } = action;
            console.log("Set Frame Size");
            return {
                ...state,
                frameSize: value
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

        case types.SHOW_WHEELS_SIZE_COMPONENT: {
            const { value } = action;
            console.log("Set Show Wheel Size Component From Size");
            return {
                ...state,
                showWheelsSizeComponent: value
            }
        }

        default: return state;
    }
};

export default frameSizeReducer;
