import React from 'react';
import styled from 'styled-components';
import { FaGitAlt } from 'react-icons/fa'; 

// Aqui se configura el label que le puse en la esquina inferior izquierda, el que
// cambia cada que cambia la seccion

const FixedLabel = ({ text }) => {
  return (
    <Container>
    <Icon>
      <FaGitAlt />
    </Icon>
    {text}
  </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 2vh;
  left: 3vh;
  display: flex;
  align-items: center;
  font-size: 3.9vh;
  color: white;
  z-index: 10;
  font-family: 'Inconsolata', monospace; 
`;

const Icon = styled.div`
  margin-right: 1vh;
`;

export default FixedLabel;
