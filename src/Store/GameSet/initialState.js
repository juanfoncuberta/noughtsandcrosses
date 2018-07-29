const initialState = {
    playerActive:1,
    boardValue:[[{id:0,val:0},{id:1,val:0},{id:2,val:0}],[{id:3,val:0},{id:4,val:0},{id:5,val:0}],[{id:6,val:0},{id:7,val:0},{id:8,val:0}]],
    gameFinished:false,
    winnerCombination: [
        [
            {row:0,col:0},
            {row:0,col:1},
            {row:0,col:2},
        ],
        [
            {row:1,col:0},
            {row:1,col:1},
            {row:1,col:2},
        ],
        [
            {row:2,col:0},
            {row:2,col:1},
            {row:2,col:2},
        ],
        [
            {row:0,col:0},
            {row:1,col:0},
            {row:2,col:0},
        ],
        [
            {row:0,col:1},
            {row:1,col:1},
            {row:2,col:1},
        ],
        [
            {row:0,col:2},
            {row:1,col:2},
            {row:2,col:2},
        ],
        [
            {row:0,col:0},
            {row:1,col:1},
            {row:2,col:2},
        ],
        [
            {row:0,col:2},
            {row:1,col:1},
            {row:2,col:0},
        ],
    ]

}

export default initialState;