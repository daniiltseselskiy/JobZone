import _ from 'lodash'
import {
    CHANGE_SIDEBAR_STATUS
} from '../../constants/actionTypes'

const initialState = {
   sideBarStatus: 1
}

const reducer = (state = initialState, action ) => {
    let newState = _.cloneDeep(state)

    switch( action.type ) {
        case CHANGE_SIDEBAR_STATUS:
            
            newState.sideBarStatus = action.sideBarStatus
            return newState
        default:
            return state;
    }
}

export default reducer