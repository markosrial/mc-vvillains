import {combineReducers, createStore} from 'redux';

import currentGame from './currentGame';

const index = combineReducers({
    currentGame: currentGame.reducer
});

const configureStore = () => createStore(index);

export default configureStore;
