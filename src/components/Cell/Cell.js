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

var calculateCellColor = (value) =>(
  
    (value == 0 ? 'white':(value === 1 ? 'blue':'red'))
);
   



const Cell = ({cellId,onClick,cellValue}) => ( 
        <StyledBox  key={cellId} onClick={onClick} defaultValue={cellValue}  bg={calculateCellColor(cellValue)}  />
);
export default Cell;