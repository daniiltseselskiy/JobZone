import _ from 'lodash'
import {
    CHANGE_MESSAGE_PANEL_STATUS,
} from '../../constants/actionTypes';

const initialState = {
   messagePanelStatus: false
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case CHANGE_MESSAGE_PANEL_STATUS:
            newState.messagePanelStatus = !state.messagePanelStatus;
            return newState;
        default:
            return state;
    }
};

export default reducer;