import {
    getJobListService
} from '../apis';

import {
    CHANGE_CURRENT_TAP,
    API_LOADING,
    GET_JOB_LIST_SUCCESS,
    GET_JOB_LIST_FAILED
} from '../constants/actionTypes';

export function onChangeContent(currentTap) {
    return {
        type: CHANGE_CURRENT_TAP,
        currentTap
    }
}

export function fetchingData() {
    return {
        type: API_LOADING
    }
}

export function getedJobListSuccess(list) {
    return {
        type: GET_JOB_LIST_SUCCESS,
        list
    }
}

export function getedJobListFailed(error) {
    return {
        type: GET_JOB_LIST_FAILED,
        error
    }
}

export function getJobList() {
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return getJobListService()
        .then((response) => {
            dispatch(getedJobListSuccess(response));
        })
        .catch(err => {
            dispatch(getedJobListFailed(err));
        })
    }
}