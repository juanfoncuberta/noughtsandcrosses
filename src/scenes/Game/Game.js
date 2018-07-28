import React from 'react';
import { Box, Flex } from 'rebass';
import { Cell , PlayerSelection, Button } from '../../components'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    playerActive: state.game.playerActive,
    boardValue: state.game.boardValue,
    gameFinished: state.game.gameFinished
});

const Board =(board)=> ( board.map((row,i) => 
        CheckCell(row,i)     
));
const CheckCell = function(position,i){
    
    const row = [];
        position.map((el)=>
        row.push(<Cell/>)
    );
    return <Flex>{row}</Flex>
}
    


const Game = ({playerActive,boardValue,gameFinished}) => <Box bg="white" color="primary">
                        Let's play a game
                            {Board(boardValue)}
                            <Flex>
                                <PlayerSelection playerActive={playerActive} player = '1'/>
                                <Button />
                                <PlayerSelection playerActive={playerActive} player = '2'/>
                            </Flex>
                        
                        <div>
                            <p>¿Historial?</p>
                        </div>
                    </Box>;





export default connect(mapStateToProps)(Game);
