import initialState from './initialState';
import {
    GAME_SET_SET_PLAYER_ACTIVE,
    GAME_SET_SET_BOARD_VALUE,
    GAME_SET_SET_GAME_FINISHED,
    GAME_SET_SET
} from './actions';



 const gameSetReducer = (state = initialState, {type , payload})  => {
    switch(type){
        case GAME_SET_SET_PLAYER_ACTIVE:
            return {...state,playerActive:payload};
        case GAME_SET_SET_BOARD_VALUE:
            return {...state,boardValue:payload};
        case GAME_SET_SET_GAME_FINISHED:
            return {...state,gameFinished:payload};
        case GAME_SET_SET:
            return {...state,...payload};
        default:
            return state;
    }
};


export default gameSetReducer;