import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa'; 

const LinkedinButton = () => {
  return (
    <Button>
      <FaLinkedin />
      <Tooltip>LinkedIn</Tooltip>
    </Button>
  );
};

const Button = styled.button`
  background-color: #45DDC0; 
  border: none; 
  border-radius: 50%; 
  color: 17181B; 
  font-size: 5vh; 
  padding: 1.5vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  position: relative; 

  &:hover {
    background-color: #39C2A8; 
  }

  &:focus {
    outline: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -1vh; 
    left: -1vh;
    right: -1vh;
    bottom: -1vh;
    border: 0.5vh solid #45DDC0; 
    border-radius: 50%; 
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: 10vh;
  font-size: 2.5vh;
  background-color: #45DDC0;
  color: #000;
  text-align: center;
  border-radius: 1vh;
  padding: 1vh;
  position: absolute;
  z-index: 1;
  bottom: -7.5vh; 
  left: 5.5vh;
  margin-left: -7.2vh;
  opacity: 0;
  transition: opacity 0.3s;
  font-family: 'Inconsolata', monospace;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
export default LinkedinButton;
