import React from 'react';
import styled from 'styled-components';

const Inicio = () => {
  return (
    <InicioContainer id="inicio">
      <h1>Hola, soy Rafael Sandoval, un <Highlight>programador</Highlight>.</h1>
    </InicioContainer>
  );
}

const InicioContainer = styled.div`
  background-color: #17181B; 
  color: white;
  min-height: 100vh;
  padding-top: 4%;

  @media (max-width: 1500px) {
    padding-top: 5%;
  }
`;
const Highlight = styled.span`
  color: #ff007f;
`;
export default Inicio;