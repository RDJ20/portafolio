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
  width: 46px;
  height: 46px;
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



/*

  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    font-size: 200%;
  }
  
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    font-size: 190%;
  }
    */