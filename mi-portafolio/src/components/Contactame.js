import React from 'react';
import styled from 'styled-components';

const Contactame = () => {
  return (
    <ContactameContainer id="contacto">
      <h2>Contactame</h2>
    </ContactameContainer>
  );
}

const ContactameContainer = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default Contactame;
