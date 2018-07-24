import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';


const StyledFlex = styled(Flex)`
    min-height:100vh;
`; 


const Main = ({children}) => <StyledFlex flexDirection="Column">{children}</StyledFlex>

export default Main;