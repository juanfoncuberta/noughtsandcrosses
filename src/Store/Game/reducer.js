import initialState from './initialState';
import {GAME_SET_ALL} from './actions';



 const gameReducer = (state = initialState, {type , payload})  => {
    switch(type){
        case GAME_SET_ALL:
            return {...state,...payload};
        default:
            return state;
    }
};


export default gameReducer;