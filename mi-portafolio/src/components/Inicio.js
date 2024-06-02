import React from 'react';
import styled from 'styled-components';
import GitHubButton from './Buttons/Github'
import LinkedinButton from './Buttons/Linkedin';
import CVButton from './Buttons/CV';

const Inicio = () => {
  return (
    <InicioContainer id="inicio">
      <KanjiBackground>決意力</KanjiBackground>
      <Content>
        <StyledH1>Hola,</StyledH1>
        <StyledH1>soy Rafael Sandoval,</StyledH1>
        <StyledH1>un <Highlight>programador</Highlight>.</StyledH1>
        <ButtonWrapper>
          <LinkedinButton />
          <GitHubButton />
          <CVButton/>
        </ButtonWrapper>
      </Content>
    </InicioContainer>
  );
}

const InicioContainer = styled.div`
  background-color: #17181B; 
  color: white;
  min-height: 100vh;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1500px) {
    padding-top: 5%;
  }
`;

const KanjiBackground = styled.div`
  position: absolute;
  font-size: 61vh; 
  color: #1C1D20; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap; /* Para que las palabras se dividan en varias líneas o algo asi*/
  font-weight: bold;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: left;
  font-size: 5vh;
  font-family: 'Inconsolata', monospace; 
  font-weight: 400; 
  padding-top: 8vh;
  margin-right: 200px; 
`;

const StyledH1 = styled.h1`
  font-weight: 400; /* Especificar peso de fuente para los h1 */
`;

const Highlight = styled.span`
  background: linear-gradient(45deg, #ff007f, #F7835F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonWrapper = styled.div`
  margin-top: 1vh; 
  display: flex; 
  gap: 4vh; 
  margin-left: 1.7vh;
  `;
export default Inicio;