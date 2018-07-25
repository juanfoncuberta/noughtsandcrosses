import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';


const StyledBox = styled(Box)`
    border-radius: 15px;
    border: 2px solid black;
    height: 100px;
    width: 100px;
    margin-left: 100px;
    
`;


const Cell = ({player, children}) => (
    <StyledBox bg="white" color='red' />
);
export default Cell;