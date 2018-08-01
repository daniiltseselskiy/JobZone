import {
    CHANGE_MESSAGE_PANEL_STATUS,
    GET_CONVERSATIONS_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SHOW_MESSAGE_DETAIL_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    DELETE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_SUCCESS,
    OPERATION_FAILED,
    API_LOADING,
} from '../constants/actionTypes'
import {
    fetchDataService,
    postDataService,
    updateDataService,
    deleteDataService,

} from '../apis'
export function changeMessagePanelStatus () {
    return {
        type: CHANGE_MESSAGE_PANEL_STATUS
    }
}

export function fetchingData() {
    return {
        type: API_LOADING
    }
}

export function getedConversationsSuccess (conversations) {
    return {
        type: GET_CONVERSATIONS_SUCCESS,
        conversations
    }
} 

export function getedMessagesSuccess (messages) {
    return {
        type: GET_MESSAGES_SUCCESS,
        messages
    }
}

export function showedMessageDetailSuccess (message) {
    return {
        type: SHOW_MESSAGE_DETAIL_SUCCESS,
        message
    }
}

export function sendedMessageSuccess (message) {
    return {
        type: SEND_MESSAGE_SUCCESS,
        message
    }
}

export function deletedMessageSuccess (result) {
    return {
        type: DELETE_MESSAGE_SUCCESS,
        result
    }
}

export function updatedMessageSuccess (message) {
    return {
        type: UPDATE_MESSAGE_SUCCESS,
        message
    }
}

export function operationFailed (error) {
    return {
        type: OPERATION_FAILED,
        error
    }
}

//GET DATA From backend api
export function getConversations () {
    return (dispatch, getState ) => {
        dispatch(fetchingData());
        return fetchDataService()
        .then((response) => { 
            dispatch(getedConversationsSuccess(response))
        }) 
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

export function getMessages () {
    return (dispatch, getState ) => {
        dispatch(fetchingData())
        return fetchDataService()
        .then((response) => {
            dispatch(getedMessagesSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

export function showMessageDetail () {
    return (dispatch, getState ) => {
        dispatch(fetchingData())
        return fetchDataService()
        .then((response) => {
            dispatch(showedMessageDetailSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

export  function sendMessage () {
    return (dispatch , getState ) => {
        dispatch(fetchingData())
        return postDataService()
        .then((response) => {
            dispatch(sendedMessageSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

export function deleteMessage () {
    return (dispatch, getState ) => {
        dispatch(fetchingData())
        return deleteDataService()
        .then((response) => {
            dispatch(deletedMessageSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}

export function updateMessage () {
    return (dispatch, getState) => {
        dispatch(updateDataService())
        return updateDataService()
        .then((response) => {
            dispatch(updatedMessageSuccess(response))
        })
        .catch((err) => {
            dispatch(operationFailed(err))
        })
    }
}