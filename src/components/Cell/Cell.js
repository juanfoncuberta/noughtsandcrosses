import React from 'react';
import { Box,Button } from 'rebass';
import styled from 'styled-components';


const StyledBox = styled(Box)`
    border-radius: 15px;
    border: 2px solid black;
    height: 100px;
    width: 100px;
   /*margin-left: 100px;
    */
`;


const Cell = ({player, children,key,onClick}) => ( 
        <StyledBox id={key} onClick={onClick}  bg="#FF0000"  />
);
export default Cell;