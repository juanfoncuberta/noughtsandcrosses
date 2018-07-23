import React from 'react';
import { Game } from '../scenes';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './Theme';


injectGlobal`
  ${normalize()};
  
`;
const App = () => 
    <StyleProvider theme={theme}>
        <Game />
    </StyleProvider>;
export default App;
