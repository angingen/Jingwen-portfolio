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

export const EyePosition = (state = {
    eyePositionL: 180,
    eyePositionR: 180 }, action) => {
    switch (action.type) {
        case ActionTypes.EYEMOVE:
            return {eyePositionL:action.payload.eyePositionL, eyePositionR: action.payload.eyePositionR}
        default:
            return state
    }
}

export const NavBarCollapse = (state = false , action ) => {
    switch (action.type) {
        case ActionTypes.TOGGLECOLLAPSE:
            return !state
        default:
            return state
    }
}

export const LoadedImg = (state=[], action) => {
    switch (action.type) {
        case ActionTypes.LOADEDIMG:
            return [...state, action.payload]
        default:
            return state
    }
}