import React from 'react';
import { Box, Label, Button } from 'rebass';
import { Cell } from '../../components'

const Game = () => <Box bg="white" color="primary">
                        Let's play a game
                        <div>
                            <p>Tablero</p>
                            <Cell />
                            <div><span color="blue">P1</span>-<Button bg="primary" color="white">Restart</Button>-<span color="red">p2</span></div>
                        </div>
                        <div>
                            <p>¿Historial?</p>
                        </div>
                    </Box>;

export default Game;
