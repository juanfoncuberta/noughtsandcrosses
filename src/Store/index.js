import {createStore } from 'redux';
import rootReducer from './reducer';
export {
    gameSet,
    gameSetPlayerActive,
    gameSetBoardValue,
    gameSetGameFinished,
    gameSetSet
} from './actions';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;   