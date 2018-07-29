import {
    getJobListService
} from '../apis';

import {
    CHANGE_CURRENT_TAP,
    API_LOADING,
    GET_JOB_LIST_SUCCESS,
    GET_JOB_LIST_FAILED,
    CHANGE_SEARCH_COMPANY,
    CHANGE_SEARCH_JOB,
    CHANGE_SEARCH_CANDIDATE,
    CHANGE_SEARCH_APPLIED,
    CHANGE_SEARCH_DATE,
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

export function changeSearchCompany (company) {
    return {
        type: CHANGE_SEARCH_COMPANY,
        company
    }
}

export function changeSearchJob (job) {
    return {
        type: CHANGE_SEARCH_JOB,
        job
    }
}

export function changeSearchApplied (applied) {
    return {
        type: CHANGE_SEARCH_APPLIED,
        applied
    }
}

export function changeSearchCandidate (candidate) {
    return {
        type: CHANGE_SEARCH_CANDIDATE,
        candidate
    }
}

export function changeSearchDate (date) {
    return {
        type: CHANGE_SEARCH_DATE,
        date
    }
}