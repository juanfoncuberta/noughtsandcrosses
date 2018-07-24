import React from 'react';
import { Box, Flex, Toolbar } from 'rebass';
import { VideogameAsset } from 'styled-icons/material';

const Header = () => (
    <Toolbar bg="primary" color="white" p={3}>
      <Flex justifyContent="space-between" alignItems="center">
        <VideogameAsset size="24" />
        <div>Game</div>
      </Flex>
    </Toolbar>
  );
  
  export default Header;