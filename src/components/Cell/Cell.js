import React from 'react';
import { Box,Button } from 'rebass';
import styled from 'styled-components';
import theme from '../../App/Theme'


const StyledBox = styled(Box)`
    border-radius: 15px;
    border: 2px solid black;
    height: 100px;
    width: 100px;
`;


const Cell = ({cellId,onClick,cellValue}) => ( 
        <StyledBox  key={cellId} onClick={ onClick} defaultValue={cellValue}  bg={(cellValue == 0 ? 'white':(cellValue === 1 ? 'blue':'red'))}  />
);
export default Cell;