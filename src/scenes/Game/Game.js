import React from 'react';
import { Box } from 'rebass';
import { Cell , PlayerSelection, Button } from '../../components'

const Game = () => <Box bg="white" color="primary">
                        Let's play a game
                        <div>
                            <Cell />
                            <div><PlayerSelection player = 'P1'/>
                            <Button />
                            <PlayerSelection player = 'P2'/></div>
                        </div>
                        <div>
                            <p>¿Historial?</p>
                        </div>
                    </Box>;

export default Game;
