import { createStore, compose } from 'redux';

import reducer from './reducers/yourDecks';


let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(reducer, composeEnhancers());
};

export default configureStore;