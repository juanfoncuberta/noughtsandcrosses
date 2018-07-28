import React from 'react';
import { Box, Flex } from 'rebass';
import { PlayerSelection, ButtonRestart, Board } from '../../components'




const Game = ({
    playerActive,
    boardValue,
    gameFinished,
    onChangePlayerActive,
    onChangeBoardValue,
    onChangeGamedFinished,
    onRestartGame,
    onClickCell
    }) => <Box bg="white" color="primary">
            Let's play a game
                <Board boardValue={boardValue} onClick={onClickCell} />
                <Flex>
                    <PlayerSelection playerActive={playerActive} player = '1' onChangePlayerActive={onChangePlayerActive}/>
                    <ButtonRestart onClick={onRestartGame} children='Restart' />
                    <PlayerSelection playerActive={playerActive} player = '2' onChangePlayerActive={onChangePlayerActive}/>
                </Flex>
        </Box>;




export default Game;
