import _ from 'lodash'

import { REDIRECT_SIDEBAR_TAP } from '../../constants/actionTypes'

const initialState = {
    sidebarState: 1,
}

const reducer = (state = initialState, action ) => {
    let newState = _.cloneDeep(state)

    switch( action.type ) {
        case REDIRECT_SIDEBAR_TAP:
            newState.sidebarState = action.sidebarState;
            return newState
        default:
            return state;
    }
}

export default reducer