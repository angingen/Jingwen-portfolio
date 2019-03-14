import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects } from './projects';
import { InitialContactForm } from './contactForm';
import { Modal } from './components';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            modalIsOpen: Modal,
            ...createForms({
                contactForm: InitialContactForm
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}

