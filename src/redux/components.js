import * as ActionTypes from './ActionTypes';

export const Modal = (state = false , action ) => {
    switch (action.type) {
        case ActionTypes.TOGGLE:
            return !state
        default:
            return state
    }
}

export const Nav = (state = false , action ) => {
    switch (action.type) {
        case ActionTypes.SHOWNAV:
            return true
        case ActionTypes.HIDENAV:
            return false
        default:
            return state
    }
}

export const Loaded = (state = false , action) => {
    switch (action.type) {
        case ActionTypes.LOADED:
            return true
        case ActionTypes.UNMOUNT:
            return false
        default:
            return state
    }
}