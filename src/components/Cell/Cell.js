import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';


const StyledBox = styled(Box)`
    border: 2px solid red;
    height: 200px;
    width: 200px;
    margin-left: 100px;
    
`;


const Cell = ({player, children}) => (
    <StyledBox bg="white" color='red'>

    </StyledBox>
);
export default Cell;