import React from 'react';
import { Box, Flex } from 'rebass';
import { VideogameAsset } from 'styled-icons/material';

const Header = () => (
    <Box bg="primary" color="white" p={3}>
      <Flex justifyContent="space-between" alignItems="center">
        <VideogameAsset size="24" />
        <div>Game</div>
      </Flex>
    </Box>
  );
  
  export default Header;