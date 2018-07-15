import _ from 'lodash'
import {
    OPEN_EDIT_PROFILE,
    OPEN_EDIT_MEMBER 
} from '../../constants/actionTypes';

const initialState = {
   isEditProfile: false,
   isEditMember: false,
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

        default:
            return state;
    }
};

export default reducer;