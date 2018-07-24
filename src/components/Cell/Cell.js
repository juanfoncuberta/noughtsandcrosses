import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';


const StyledBox = styled(Box)`
    border-color: 'red';
`;


const Cell = ({player, children}) => (
    <StyledBox bg="white" width='50' color='red'>

    </StyledBox>
);
export default Cell;