import types from '../../duck/types';

const INITIAL_STATE = {
    bikeType: '',
    frameSize: '',
    frameData: [{
        frameId :15,
        bikeType:16
    }],
    showFrameComponent: ''
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

        case types.SHOW_FRAME_COMPONENT: {
            const { value } = action;
            console.log("Set Show Frame Component From Size");
            return {
                ...state,
                showFrameComponent: value
            }
        }

        default: return state;
    }
};

export default frameSizeReducer;