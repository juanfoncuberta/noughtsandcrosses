import React from 'react';
import { Game } from '../scenes';
import  Header from './Header';
import  Content from './Content';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import theme from './Theme';


injectGlobal`
  ${normalize()};

`;



const App = () => (
     <StyleProvider theme={theme}>
        <Header />
        <BrowserRouter>
            <Content>
                <Route path="/" exact component={Game}/>-
            </Content>
        </BrowserRouter>
       <Game />
     </StyleProvider>
    );
export default App;
