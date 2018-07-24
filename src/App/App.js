import React from 'react';
import { Game } from '../scenes';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Content, Header } from '../Layout';
import theme from './Theme';


injectGlobal`
  ${normalize()};

`;



const App = () => (
     <StyleProvider theme={theme}>
        <BrowserRouter>
            <Main>
                <Header />
                <Content>
                    <Route path="/" exact component={Game}/>-
                </Content>
            </Main> 
        </BrowserRouter>
       <Game />
     </StyleProvider>
    );
export default App;
