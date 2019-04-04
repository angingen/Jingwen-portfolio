import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
})

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading());

    return fetch(baseURL + 'projects')
        .then(res=> {
            if (res.ok) {
                return res;
            }
            else {
                var error = new Error('Error ' + res.status + res.statusText);
                error.message = res;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(res=> res.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
}

export const toggleModal = () => (dispatch) => dispatch({
    type: ActionTypes.TOGGLE
});

export const toggleCollapse = () => (dispatch) => dispatch({
    type: ActionTypes.TOGGLECOLLAPSE
});

export const showNav = () => (dispatch) => dispatch({
    type: ActionTypes.SHOWNAV
});

export const hideNav = () => (dispatch) => dispatch({
    type: ActionTypes.HIDENAV
});

export const componentLoaded = () => (dispatch) => dispatch({
    type: ActionTypes.LOADED
});

export const componentUnmount = () => (dispatch) => dispatch({
    type: ActionTypes.UNMOUNT
});

export const imgLoaded = (imgurl) => (dispatch) => dispatch({
    type: ActionTypes.LOADEDIMG,
    payload: imgurl
})


export const sendMessage = (message) => (dispatch) => {
    // const newMessage = {...message};
    // newMessage.date = new Date().toISOString();
    return fetch(baseURL + 'message', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(() => alert('Thank you for contact me. I will get back to you as soon as possible.'))
        .catch(error => alert('Sorry, your message failed to be sent: ' + error))
}

export const eyeMove = (event,leftEyeEle,rightEyeEle) => (dispatch) => {
    const y1 = event.clientY;
    const x1 = event.clientX;
    const x0r = rightEyeEle.left + rightEyeEle.width/2;
    const y0r = rightEyeEle.top + rightEyeEle.height/2;
    const x0l = leftEyeEle.left + leftEyeEle.width/2;
    const y0l = leftEyeEle.top + leftEyeEle.height/2;

    var eyePositionL = Math.acos((y1-y0l)/Math.sqrt(Math.abs(x1*x1 - x0l*x0l)))*180/Math.PI;
    if (y1 > y0l) {
        eyePositionL? eyePositionL = (x0l-x1)/Math.abs(x0l-x1)*eyePositionL+90 : eyePositionL=90;
    } else if (y1 < y0l) {
        eyePositionL? eyePositionL = (x0l-x1)/Math.abs(x0l-x1)*eyePositionL+90 : eyePositionL=-90;
    } else {
        x1 > x0l ? eyePositionL = 0: eyePositionL = 180;
    }

    var eyePositionR = Math.acos((y1-y0r)/Math.sqrt(Math.abs(x1*x1 - x0r*x0r)))*180/Math.PI;
    if (y1 > y0r) {
        eyePositionR? eyePositionR = (x0r-x1)/Math.abs(x0r-x1)*eyePositionR+90 : eyePositionR=90;
    } else if (y1 < y0r) {
        eyePositionR? eyePositionR = (x0r-x1)/Math.abs(x0r-x1)*eyePositionR+90 : eyePositionR=-90;
    } else {
        x1 > x0r ? eyePositionR = 0: eyePositionR = 180;
    }

    dispatch(changeEyeposition(eyePositionL,eyePositionR));
}


export const changeEyeposition = (eyePositionL,eyePositionR) => ({
    type: ActionTypes.EYEMOVE,
    payload: {eyePositionL:eyePositionL, eyePositionR:eyePositionR}
});