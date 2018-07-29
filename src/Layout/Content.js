import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';


const StyledBox = styled(Box)`
    flex: 1;
`;
const Content = ({children}) => <StyledBox bg='white'>{children} </StyledBox>;

export default Content;