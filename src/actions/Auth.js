import {
    CHANGE_SIGNUP_STEP,
    CHANGE_LOGGED_STATUS,
    SIGN_UP_SUCCESS,
    OPERATION_FAILED,
    API_LOADING,
    SEND_VERIFICATION_SUCCESS,
    USER_VERIFICATION_SUCCESS,
    SIGN_IN_SUCCESS,
} from '../constants/actionTypes'
import {
    postDataService,
    updateDataService,
} from '../apis'
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

export function fetchingData () {
    return {
        type: API_LOADING,
    }
}

export function operationFailed (error) {
    return {
        type: OPERATION_FAILED,
        error
    }
}
//Sign Up

export function signUpSuccess (user) {
    return {
        type: SIGN_UP_SUCCESS,
        user
    }
}
export function signUp (user) {
    return (dispatch, getState) => {
        dispatch(fetchingData())
        return postDataService('/users.json', { 'users': user})
        .then((response) => {
            dispatch(signUpSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}
//Send Verification
export function sendVerificationSuccess(result) {
    return {
        type: SEND_VERIFICATION_SUCCESS,
        result
    }
}
export function sendVerification() {
    return (dispatch, getState) => {
        dispatch(fetchingData())
        return updateDataService('/users/' + getState.Auth.userId + '/send_verification_code.json', {})
        .then((response) => {
            dispatch(sendVerificationSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

//User`s Verification
export function userVerificationSuccess(result) {
    return {
        type: USER_VERIFICATION_SUCCESS,
        result
    }
}

export function userVerification(verificationCode) {
    return (dispatch, getState) => {
        dispatch(fetchingData())
        return updateDataService('/users/' + getState.Auth.userId + '/verify.json', {'verification_code': verificationCode})
        .then((response) => {
            dispatch(userVerificationSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

//Sign In Process
export function signInSuccess(result) {
    return {
        type: SIGN_IN_SUCCESS,
        result
    }
}

export function signIn(user) {
    console.log({'users': user})
    return (dispatch, getState) => {
        dispatch(fetchingData())
        return postDataService('/users/sign_in.json', {'user': user})
        .then((response) => {
            console.log(response)
            dispatch(signInSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}