import  { REDIRECT_SIDEBAR_TAP } from '../constants/actionTypes'

export function onChangeSidebarState(sidebarState) {
    console.log(sidebarState)
    return {
        type: REDIRECT_SIDEBAR_TAP,
        sidebarState
    }
}