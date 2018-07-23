import {
    CHANGE_SIDEBAR_STATUS
} from '../constants/actionTypes'

export function changeSideBarStatus (sideBarStatus) {
    return { 
        type: CHANGE_SIDEBAR_STATUS,
        sideBarStatus
    }
}