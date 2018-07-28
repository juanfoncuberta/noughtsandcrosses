import { combineReducers } from 'redux';
import { default as gameReducer } from './Game'; 

export default combineReducers({
    game: gameReducer
});
