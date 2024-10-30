import React, { useRef } from 'react';
import styled from 'styled-components';
import GitHubButton from './Buttons/Github'
import LinkedinButton from './Buttons/Linkedin';
import CVButton from './Buttons/CV';
import Parallax from '../hooks/Parallax';
import useScrollEffect from '../hooks/useScrollEffect';

const Inicio = () => {
  const contentRef = useRef(null);
  const kanjiRef = useRef(null);
  Parallax(contentRef, -1);
  useScrollEffect(kanjiRef);

  return (
    <InicioContainer id="inicio">
      <KanjiBackground ref={kanjiRef}>決意力</KanjiBackground>
      <Content ref={contentRef}>
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


// Contenedor de todas las cosas del inicio
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

// Letras japonesas del fondo
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


  @media (max-width: 1024px) {
    font-size:  30vh;
    white-space: normal; /* Hace que el texto se divida en varias líneas */
    display: flex;
    align-items: center; /* Centrado vertical */
    justify-content: center; /* Centrado horizontal */
    text-align: center; /* Alineación del texto dentro del contenedor */
    height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  }

  @media (max-width: 768px) {
    font-size: 20vh;
    white-space: normal; /* Hace que el texto se divida en varias líneas */
    display: flex;
    align-items: center; /* Centrado vertical */
    justify-content: center; /* Centrado horizontal */
    text-align: center; /* Alineación del texto dentro del contenedor */
    height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  }

  @media (max-width: 480px) {
    font-size: 20vh;
    white-space: normal; /* Permite que el texto se divida en varias líneas */
    display: flex;
    align-items: center; /* Centrado vertical */
    justify-content: center; /* Centrado horizontal */
    text-align: center; /* Alineación del texto dentro del contenedor */
    height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: left;
  font-size: 6vh;
  font-family: 'Inconsolata', monospace; 
  font-weight: 400; 
  padding-top: 8vh;
  margin-right: 25vh; 
  will-change: transform;

  @media (max-width: 1440px) {
    margin-right: 2vh;
    font-size: 6vh;
  }

  @media (max-width: 1024px) {
    margin-right: 2vh;
    font-size: 6vh;
  }

  @media (max-width: 482px) {
    margin-top: 10vh;
    margin-left: 3vh;
    display: flex; /* Añadido para centrar */
    flex-direction: column; /* Mantiene los elementos en columna */
    align-items: center; /* Centrado horizontal */
    
    white-space: nowrap;
    font-size: 3.4vh;
    
  }


`;

const StyledH1 = styled.h1`
  font-weight: 400; /* Especificar peso de fuente para los h1 */

  @media (max-width: 482px) {
   
  }
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