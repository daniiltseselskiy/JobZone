import _ from 'lodash'
import {
    
} from '../../constants/actionTypes';

const initialState = {
   signUpStep: 4
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        

        default:
            return state;
    }
};

export default reducer;