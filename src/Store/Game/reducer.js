import initialState from './initialState';
import {GAME_SET} from './actions';



 const gameReducer = (state = initialState, {type , payload})  => {
    switch(type){
        case GAME_SET:
            return {...state,...payload};
        default:
            return state;
    }
};


export default gameReducer;