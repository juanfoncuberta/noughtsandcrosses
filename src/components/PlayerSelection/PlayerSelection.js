import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const StyledPlayerSelection  = styled(Text)`
    color: ${player => player === '1'? 'red':'blue'};
`;



const PlayerSelection = ({playeractive, player}) => (
    <StyledPlayerSelection>P{player}</StyledPlayerSelection>
);


export default PlayerSelection;