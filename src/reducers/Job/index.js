import _ from 'lodash'
import {
    CHANGE_CURRENT_TAP,
    API_LOADING,
    GET_JOB_LIST_SUCCESS,
    GET_JOB_LIST_FAILED,
    CHANGE_SEARCH_COMPANY,
    CHANGE_SEARCH_APPLIED,
    CHANGE_SEARCH_DATE,
    CHANGE_SEARCH_JOB,
    CHANGE_SEARCH_CANDIDATE,
} from '../../constants/actionTypes';

const initialState = {
   currentTap: 1,
   jobList: [],
   apiLoading: false,
   esrrors: [],
   searchCompany: null,
   searchJob: "",
   searchCandidate: "",
   searchApplied: "",
   searchDate: "",
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case CHANGE_CURRENT_TAP:
            newState.currentTap = action.currentTap;
            return newState;
        case API_LOADING:
            newState.apiLoading = true;
            return newState;
        case GET_JOB_LIST_SUCCESS:
            newState.apiLoading = false;
            newState.jobList = action.list;
            return newState;
        case GET_JOB_LIST_FAILED:
            newState.apiLoading = false;
            newState.errors.push(action.error);
            return newState;
        case CHANGE_SEARCH_COMPANY:
            newState.searchCompany = action.company
            return newState
        case CHANGE_SEARCH_JOB:
            newState.searchJob = action.job
            return newState
        case CHANGE_SEARCH_CANDIDATE:
            newState.searchCandidate = action.candidate
            return newState
        case CHANGE_SEARCH_APPLIED:
            newState.searchApplied = action.applied
            return newState
        case CHANGE_SEARCH_DATE:
            newState.searchDate = action.date
            return newState
        default:
            return state;
    }
};

export default reducer;