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
