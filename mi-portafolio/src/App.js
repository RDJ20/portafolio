import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Contactame from './components/Contactame';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Main>
        <Inicio />
        <Proyectos />
        <SobreMi />
        <Contactame />
      </Main>
    </div>
  );
}

const Main = styled.main` 
 
`;
export default App;
