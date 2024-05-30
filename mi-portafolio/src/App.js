import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Main>
        <Inicio />
      </Main>
    </div>
  );
}

const Main = styled.main` 
 
`;
export default App;
