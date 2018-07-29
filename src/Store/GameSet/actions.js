export const GAME_SET_SET='GAME_SET/SET';
export const GAME_SET_SET_PLAYER_ACTIVE='GAME_SET/SET_PLAYER_ACTIVE';
export const GAME_SET_SET_BOARD_VALUE='GAME_SET/SET_BOARD_VALUE';
export const GAME_SET_SET_GAME_FINISHED='GAME_SET/SET_GAME_FINISHED';


export const gameSetSet = payload =>({
    type:GAME_SET_SET,
    payload
});
export const gameSetPlayerActive = (payload) => ({
    type:GAME_SET_SET_PLAYER_ACTIVE,
    payload
});

export const gameSetBoardValue= payload => ({
    type:GAME_SET_SET_BOARD_VALUE,
    payload
});

export const gameSetGameFinished = payload => ({
    type:GAME_SET_SET_GAME_FINISHED,
    payload
});

