import _ from 'lodash'
import {
    CHANGE_CURRENT_TAP,
} from '../../constants/actionTypes';

const initialState = {
   currentTap: 1
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case CHANGE_CURRENT_TAP:
            newState.currentTap = action.currentTap;
            return newState;

        default:
            return state;
    }
};

export default reducer;