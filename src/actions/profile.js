import {
    OPEN_EDIT_PROFILE,
    OPEN_EDIT_MEMBER
} from '../constants/actionTypes'

export function onOpenEditProfile() {
    return {
        type: OPEN_EDIT_PROFILE
    }
}

export function onOpenEditMember() {
    return {
        type: OPEN_EDIT_MEMBER
    }
}