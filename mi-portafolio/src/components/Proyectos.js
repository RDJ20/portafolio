import React from 'react';
import styled from 'styled-components';

const Proyectos = () => {
  return (
    <ProyectosContainer id="proyectos">
      <h2>Proyectos</h2>
    </ProyectosContainer>
  );
}

const ProyectosContainer = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default Proyectos;