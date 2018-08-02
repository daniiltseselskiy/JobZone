import _ from 'lodash'
import {
    CHANGE_SIGNUP_STEP,
    CHANGE_LOGGED_STATUS,
    SIGN_UP_SUCCESS,
    USER_VERIFICATION_SUCCESS,
    SIGN_IN_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
   signUpStep: 1,
   isLoggedIn: false,
   userId: 0,
   verificationSuccess: false,
   authentication_token: '',
   user: {},
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
        case SIGN_UP_SUCCESS:
            newState.userId = action.user.userId
            newState.user = action.user
            return newState
        case USER_VERIFICATION_SUCCESS:
            
            newState.verificationSuccess = action.result.success
            return newState
        case SIGN_IN_SUCCESS:
            newState.userId = action.result.id
            newState.authentication_token = action.result.authentication_token
            newState.isLoggedIn = true
            return newState
        default:
            return state;
    }
};

export default reducer;