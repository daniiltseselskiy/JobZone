import {
    CHANGE_SIGNUP_STEP,
    CHANGE_LOGGED_STATUS
} from '../constants/actionTypes'

export function changeSignUpStep ( signUpStep ) {
    return {
        type: CHANGE_SIGNUP_STEP,
        signUpStep
    }
}

export function changeLoggedStatus () {
    return {
        type: CHANGE_LOGGED_STATUS
    }
}