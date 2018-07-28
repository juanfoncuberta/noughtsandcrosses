import {createStore } from 'redux';
import rootReducer from './reducer';
export {gameSet} from './actions';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_&& window._REDUC_DEVTOOLS_EXTENSION_(),
);

export default store;