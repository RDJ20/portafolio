import React from 'react';
import styled from 'styled-components';

const SobreMi = () => {
  return (
    <SobreMiContainer id="sobre-mi">
      <h2>Sobre Mí</h2>
    </SobreMiContainer>
  );
}

const SobreMiContainer = styled.div`
  background-color: #17181B;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default SobreMi;
