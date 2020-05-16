import types from '../../duck/types';

const INITIAL_STATE = {
    forkData: undefined,
    manufacturerId: sessionStorage.getItem('forkManufacturer') !== undefined ? sessionStorage.getItem('forkManufacturer') : ''
};
const forkReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case types.REQUEST_FORK_JSON: {
            const { fork } = action;
            console.log("Send REQUEST FORK RED");
            return {
                ...state,
                fork,
                forkData: []
            }
        }

        case types.RECEIVE_FORK_JSON: {
            const { forkData } = action;
            console.log("GET RESPONSE FORK RED");
            return {
                ...state,
                forkData
            }
        }
        case types.SHOW_FORK_COMPONENT: {
            const { value } = action;
            console.log("Set Show FORK");
            return {
                ...state,
                showForkComponent: value
            }
        }

        default: return state;
    }
};

export default forkReducer;
