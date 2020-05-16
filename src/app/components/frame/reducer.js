import types from '../../duck/types';

const INITIAL_STATE = {
    bikeType: {
        type: sessionStorage.getItem('bikeType') !== undefined ? sessionStorage.getItem('bikeType') : '',
        typeId:sessionStorage.getItem('bikeType') !== undefined ? sessionStorage.getItem('bikeTypeId') : '',

    },
    frameSize: sessionStorage.getItem('frameSize') !== undefined ? sessionStorage.getItem('frameSize') : '',
    frameData:undefined,
    showWheelsSizeComponent: sessionStorage.getItem('showWheelsSizeComponent') !== undefined ? sessionStorage.getItem('showWheelsSizeComponent') : '',
    manufacturerId: sessionStorage.getItem('frameManufacturer') !== undefined ? sessionStorage.getItem('frameManufacturer') : '',
    showForkComponent: ''
};
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
        case types.SHOW_FRAME_COMPONENT: {
            const { value } = action;
            console.log("Set Show Frames");
            return {
                ...state,
                showFrameComponent: value
            }
        }
        case types.SHOW_FRAME_SIZE_COMPONENT: {
            const { value } = action;
            console.log("Set Show Frames");
            return {
                ...state,
                showFrameSizeComponent: value
            }
        }

        case types.SHOW_WHEELS_SIZE_COMPONENT: {
            const { value } = action;
            console.log("Set Show Wheels");
            return {
                ...state,
                showWheelsSizeComponent: value
            }
        }

        case types.SHOW_FORK_COMPONENT: {
            const { value } = action;
            console.log("Set Show FORK Component");
            return {
                ...state,
                showForkComponent: value
            }
        }
        default: return state;
    }
}

export default frameReducer;
