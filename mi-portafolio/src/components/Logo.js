import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoContainer>
      R
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px; 
  font-size: 220%;
  font-weight: bold;
  font-family: 'Koulen', sans-serif; 
`;

export default Logo;