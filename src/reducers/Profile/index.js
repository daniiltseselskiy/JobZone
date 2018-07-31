import _ from 'lodash'
import {
    OPEN_EDIT_PROFILE,
    OPEN_EDIT_MEMBER ,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
    API_LOADING,
} from '../../constants/actionTypes';

const initialState = {
   isEditProfile: false,
   isEditMember: false,
   apiLoading: false,
   profile: {},
   errors: [],

};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case OPEN_EDIT_PROFILE:
            newState.isEditProfile = !newState.isEditProfile;
            return newState;

        case OPEN_EDIT_MEMBER:
            newState.isEditMember = !newState.isEditMember;
            return newState;
        case API_LOADING:
            newState.apiLoading = true;
            return newState;
        case GET_PROFILE_SUCCESS:
            newState.apiLoading = false;
            newState.profile = action.profile;
            return newState;
        case GET_PROFILE_FAILED:
            newState.apiLoading = false;
            newState.errors.push(action.error);
        default:
            return state;
    }
};

export default reducer;