import {
    OPEN_EDIT_PROFILE,
    OPEN_EDIT_MEMBER,
    GET_PROFILE_SUCCESS,
    EDIT_PROFILE_SUCCESS,
    EDIT_MEMBER_SUCCESS,
    API_LOADING,
    OPERATION_FAILED,
} from '../constants/actionTypes'

import {
   fetchDataService,
   postDataService,
   updateDataService,
} from '../apis'
//Common Loading.
export function fetchingData() {
    return {
        type: API_LOADING
    }
}

export function operationFailed(error) {
    return {
        type: OPERATION_FAILED,
        error 
    }
}
//isEdit
export function onOpenEditProfile() {
    return {
        type: OPEN_EDIT_PROFILE
    }
}

export function onOpenEditMember() {
    return {
        type: OPEN_EDIT_MEMBER
    }
}
//Get Profile.
export function getedProfileSuccess(profile) {
    return {
        type: GET_PROFILE_SUCCESS,
        profile
    }
}

export function getProfile() {
    return (dispatch, getState) => {
        console.log(getState())
        dispatch(fetchingData());
        return fetchDataService('/users/' + getState().Auth.userId + '.json', getState().Auth.authentication_token)
        .then((response) => {
            dispatch(getedProfileSuccess(response));
        })
        .catch(err => {
            dispatch(operationFailed(err));
        })
    }
}
//Edit Profile.
export function editedProfileSuccess(item) {
    return {
        type: EDIT_PROFILE_SUCCESS,
        item
    }
}

export function editProfile (profile) {
    // return (dispatch, getState) => {
    //     dispatch(fetchingData());
    //     return updateDataService('/users/' + getState().Auth.userId + '.json', )
    //     .then((response) => {
    //         dispatch(editedProfileSuccess(response))
    //     })
    //     .catch((err) => {
    //         dispatch(operationFailed(err))
    //     })
    // }
}
//Edit Member.
export function editedMemberSuccess(member) {
    return {
        type: EDIT_MEMBER_SUCCESS,
        member
    }
}
export function editMember (member) {
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return updateDataService('/users/' + getState().Auth.userId + '.json', member, getState().Auth.authentication_token)
        .then((response) => {
            dispatch(editedProfileSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}