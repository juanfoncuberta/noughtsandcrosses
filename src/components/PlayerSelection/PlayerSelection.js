import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';
import { ArrowSmallDown } from 'styled-icons/octicons/';

const StyledPlayerSelection  = styled(Text)`
    margin-top: 10px;
    font-weight:bold;
`;



const PlayerSelection = ({playerActive, player}) => (
  
    <div>
     {(playerActive == player && <ArrowSmallDown color={(player==1?'blue':'red')}/>)}  
    <StyledPlayerSelection color={(player==1?'blue':'red')}>P{player}</StyledPlayerSelection>
    </div>
);


export default PlayerSelection;