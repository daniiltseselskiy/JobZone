import _ from 'lodash'
import {
    CHANGE_MESSAGE_PANEL_STATUS,
    GET_CONVERSATIONS_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SHOW_MESSAGE_DETAIL_SUCCESS,
    DELETE_MESSAGE_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_SUCCESS,
    API_LOADING,
    OPERATION_FAILED,
} from '../../constants/actionTypes';

const initialState = {
   messagePanelStatus: true,
   conversations: {},
   messages: {},
   errors: [],
   apiLoading: false,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case API_LOADING: 
            newState.apiLoading = true
            return newState;
        case CHANGE_MESSAGE_PANEL_STATUS:
            newState.messagePanelStatus = !state.messagePanelStatus;
            return newState;
        case GET_CONVERSATIONS_SUCCESS:
            newState.conversations = action.conversations
            newState.apiLoading = false
            return newState;
        case GET_MESSAGES_SUCCESS:
            newState.apiLoading = false
            newState.messages = action.messages
            return newState;
        case OPERATION_FAILED:
            newState.errors.push(action.error)
            newState.apiLoading = false
        default:
            return state;
    }
};

export default reducer;