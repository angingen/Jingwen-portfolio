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