import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';
import { VideogameAsset } from 'styled-icons/material';

const StyledPlayerSelection  = styled(Text)`
    margin-top: 10px;
    font-weight:bold;
`;



const PlayerSelection = ({playeractive, player}) => (
  
 
    <StyledPlayerSelection color={(player==1?'blue':'red')}>P{player}</StyledPlayerSelection>
);


export default PlayerSelection;