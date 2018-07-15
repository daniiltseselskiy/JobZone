import _ from 'lodash'
import {
    
} from '../../constants/actionTypes';

const initialState = {
   signUpStep: 5,
   isLoggedIn: true,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        

        default:
            return state;
    }
};

export default reducer;