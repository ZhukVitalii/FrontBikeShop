import types from '../../duck/types';

const INITIAL_STATE = {
    manufacturersData: undefined,
};
const mainComponentReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.REQUEST_MANUFACTURER_JSON: {
            const { manufacturers } = action;
            return {
                ...state,
                manufacturers,
                manufacturersData: []
            }
        }
        case types.RECEIVE_MANUFACTURER_JSON: {
            const { manufacturersData } = action;
            return {
                ...state,
                manufacturersData
            }
        }

        default: return state;
    }
};

export default mainComponentReducer;
