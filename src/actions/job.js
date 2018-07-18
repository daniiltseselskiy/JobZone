import {
    CHANGE_CURRENT_TAP
} from '../constants/actionTypes';

export function onChangeContent(currentTap) {
    return {
        type: CHANGE_CURRENT_TAP,
        currentTap
    }
}