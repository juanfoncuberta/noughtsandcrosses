import React from 'react';
import { Box, Flex } from 'rebass';
import { VideogameAsset } from 'styled-icons/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../App/Theme';

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-left: ${({ theme }) => theme.space[3]}px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
 
`;
const Header = () => (
    <Box bg="primary" color="white" p={3}>
      <Flex justifyContent="space-between" alignItems="center">
        <VideogameAsset size="32" />
        <span>Let's play a game</span>
        <Box>
            <StyledLink to='/'>Game</StyledLink>
        </Box>
      </Flex>
    </Box>
  );
  
  export default Header;