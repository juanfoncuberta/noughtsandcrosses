import React from 'react';
import { Button } from 'rebass';
import styled from 'styled-components';
import { theme } from '../../App';

const StyledButton   = styled(Button)`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        background: ${({ theme }) => theme.colors.white};
        color:${({ theme }) => theme.colors.primary};
    }
`;


const ButtonRestart = ({children, onClick}) => (
    <StyledButton onClick={onClick} children={children}/>
);


export default ButtonRestart;