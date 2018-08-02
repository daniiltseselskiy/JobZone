import {
    postDataService,
    updateDataService,
    fetchDataService,
} from '../apis';

import {
    CHANGE_CURRENT_TAP,
    API_LOADING,
    OPERATION_FAILED,
    GET_JOB_LIST_SUCCESS,
    CHANGE_SEARCH_COMPANY,
    CHANGE_SEARCH_JOB,
    CHANGE_SEARCH_CANDIDATE,
    CHANGE_SEARCH_APPLIED,
    CHANGE_SEARCH_DATE,
    POST_JOB_SUCCESS,
    EDIT_JOB_SUCCESS,
} from '../constants/actionTypes';

export function onChangeContent(currentTap) {
    return {
        type: CHANGE_CURRENT_TAP,
        currentTap
    }
}
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
//Post Job.
export function postedJobSuccess(item) {
    return {
        type: POST_JOB_SUCCESS,
        item
    }
}

export function postJob (item) {
    
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return postDataService()
        .then((response) => {
            dispatch(postedJobSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}
//Edit Job.
export function editedJobSuccess(item) {
    return {
        type: EDIT_JOB_SUCCESS,
        item
    }
}
export function editJob () {
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return updateDataService()
        .then((response) => {
            dispatch(editedJobSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}
//Get job list.
export function getedJobListSuccess(list) {
    return {
        type: GET_JOB_LIST_SUCCESS,
        list
    }
}
export function getJobList() {
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return fetchDataService('/users/' + getState().Auth.userId + '/jobs.json', getState().Auth.authentication_token)
        .then((response) => {
            dispatch(getedJobListSuccess(response));
        })
        .catch(err => {
            dispatch(operationFailed(err));
        })
    }
}
// Search 
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