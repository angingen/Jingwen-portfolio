import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects } from './projects';
import { InitialContactForm } from './contactForm';
import { Modal, Loaded, Nav, EyePosition, NavBarCollapse, LoadedImg } from './components';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            modalIsOpen: Modal,
            navbarIsOpen: NavBarCollapse,
            loaded: Loaded,
            navShouldShow: Nav,
            eyePosition: EyePosition,
            loadedImg: LoadedImg,
            ...createForms({
                contactForm: InitialContactForm
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}

