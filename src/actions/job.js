import {
    getJobListService,
    postJobService,
    editJobService,
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
    POST_JOB_FAILED,
    POST_JOB_SUCCESS,
    EDIT_JOB_FAILED,
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
//Post Job.
export function postedJobSuccess(item) {
    return {
        type: POST_JOB_SUCCESS,
        item
    }
}
export function postedJobFailed(error) {
    return {
        type: POST_JOB_FAILED,
        error
    }
}
export function postJob (item) {
    console.log(item)
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return postJobService()
        .then((response) => {
            dispatch(postedJobSuccess(response))
        })
        .catch((err) => {
            dispatch(postedJobFailed(err))
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
export function editedJobFailed(error) {
    return {
        type: EDIT_JOB_FAILED,
        error
    }
}
export function editJob () {
    return (dispatch, getState) => {
        dispatch(fetchingData());
        return editJobService()
        .then((response) => {
            dispatch(editedJobSuccess(response))
        })
        .catch((err) => {
            dispatch(editedJobFailed(err))
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