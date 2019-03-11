import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects } from './projects';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        projects: Projects
    }),
    applyMiddleware(thunk,logger)
    );

    return store;
}