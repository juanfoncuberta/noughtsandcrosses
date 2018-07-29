import { combineReducers } from 'redux';
import {  gameReducer } from './Game'; 
import {  gameSetReducer } from './GameSet'; 

export default combineReducers({
    game: gameReducer,
    gameSet: gameSetReducer
});
