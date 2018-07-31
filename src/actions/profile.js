import {
    OPEN_EDIT_PROFILE,
    OPEN_EDIT_MEMBER,
    GET_PROFILE_FAILED,
    GET_PROFILE_SUCCESS,
    EDIT_PROFILE_FAILED,
    EDIT_PROFILE_SUCCESS,
    EDIT_MEMBER_FAILED,
    EDIT_MEMBER_SUCCESS,
    API_LOADING,
} from '../constants/actionTypes'
import {
    getProfileService,
    editProfileService,
    editMemberService,
} from '../apis'
//Common Loading.
export function fetchingData() {
    return {
        type: API_LOADING
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

export function getedProfileFailed(error) {
    return {
        type: GET_PROFILE_FAILED,
        error
    }
}

export function getProfile() {
    return (dispatch, getState) => {
        // dispatch(fetchingData());
        // return getProfileService()
        // .then((response) => {
        //     dispatch(getedProfileSuccess(response));
        // })
        // .catch(err => {
        //     dispatch(getedProfileFailed(err));
        // })
    }
}
//Edit Profile.
export function editedProfileSuccess(item) {
    return {
        type: EDIT_PROFILE_SUCCESS,
        item
    }
}
export function editedProfileFailed(error) {
    return {
        type: EDIT_PROFILE_FAILED,
        error
    }
}
export function editProfile () {
    return (dispatch, getState) => {
        // dispatch(fetchingData());
        // return editProfileService()
        // .then((response) => {
        //     dispatch(editedProfileSuccess(response))
        // })
        // .catch((err) => {
        //     dispatch(editedProfileFailed(err))
        // })
    }
}
//Edit Member.
export function editedMemberSuccess(item) {
    return {
        type: EDIT_MEMBER_SUCCESS,
        item
    }
}
export function editedMemberFailed(error) {
    return {
        type: EDIT_MEMBER_FAILED,
        error
    }
}
export function editMember () {
    return (dispatch, getState) => {
        // dispatch(fetchingData());
        // return editMemberService()
        // .then((response) => {
        //     dispatch(editedMemberSuccess(response))
        // })
        // .catch((err) => {
        //     dispatch(editedMemberFailed(err))
        // })
    }
}