import * as ActionTypes from './ActionTypes';

export const Modal = (state = false , action ) => {
    switch (action.type) {
        case ActionTypes.TOGGLE:
            return !state
        default:
            return state
    }
}