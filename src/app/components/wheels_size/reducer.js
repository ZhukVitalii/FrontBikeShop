import types from '../../duck/types';

const INITIAL_STATE = {
    bikeType: {
        type: sessionStorage.getItem('bikeType') !== undefined ? sessionStorage.getItem('bikeType') : '',
        typeId:sessionStorage.getItem('bikeType') !== undefined ? sessionStorage.getItem('bikeTypeId') : '',

    },
    wheelsDiam:{
        diam : sessionStorage.getItem('wheelsSize') !== undefined ? sessionStorage.getItem('wheelsSize') : '',
        diamId : sessionStorage.getItem('wheelsSizeId') !== undefined ? sessionStorage.getItem('wheelsSizeId') : ''
    },
    frameSize: sessionStorage.getItem('frameSize') !== undefined ? sessionStorage.getItem('frameSize') : '',
    frameData: '',
    showFrameComponent: ''
};
const wheelsSizeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.WHEELS_SIZE: {
            const { value } = action;
            console.log("Set Wheel Size");
            return {
                ...state,
                frameSize: value
            }
        }

        case types.REQUEST_FRAME_JSON: {
            const { frame } = action;
            return {
                ...state,
                frame,
                frameData: []
            }
        }

        case types.RECEIVE_FRAME_JSON: {
            const { frameData } = action;
            return {
                ...state,
                frameData
            }
        }

        case types.SHOW_FRAME_COMPONENT: {
            const { value } = action;
            return {
                ...state,
                showFrameComponent: value
            }
        }

        default: return state;
    }
};

export default wheelsSizeReducer;
