import React from 'react';
import { Box, Flex, Message } from 'rebass';
import { PlayerSelection, ButtonRestart, Board } from '../../components'


const Game = ({
    playerActive,
    boardValue,
    gameFinished,
    onChangePlayerActive,
    onRestartGame,
    onClickCell,
    }) => <Box bg="white" color="primary">
                {gameFinished && <Message>WE HAVE A WINNER</Message>}
                <Board boardValue={boardValue} onClick={onClickCell} />
                <Flex>
                    <PlayerSelection playerActive={playerActive} player = '1' onChangePlayerActive={onChangePlayerActive}/>
                    <ButtonRestart width={[1,1]}onClick={onRestartGame} children='Restart' />
                    <PlayerSelection playerActive={playerActive} player = '2' onChangePlayerActive={onChangePlayerActive}/>
                </Flex>
        </Box>;



export default Game;

