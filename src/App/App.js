import React from 'react';
import { Game } from '../scenes';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Content, Header } from '../Layout';
import theme from './Theme';
import store from '../Store';


injectGlobal`
  ${normalize()};

`;



const App = () => (
    <StoreProvider store={store}>
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
     </StoreProvider>
    );
export default App;
