import _ from 'lodash'
import {
    CHANGE_SIGNUP_STEP,
    CHANGE_LOGGED_STATUS
} from '../../constants/actionTypes';

const initialState = {
   signUpStep: 1,
   isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case CHANGE_SIGNUP_STEP:
            newState.signUpStep = action.signUpStep
            return newState
        case CHANGE_LOGGED_STATUS:
            newState.isLoggedIn = !state.isLoggedIn
            return newState
        default:
            return state;
    }
};

export default reducer;