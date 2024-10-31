import React, { useState } from 'react'; // Ensure useState is imported
import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state with useState

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </BurgerMenu>
        <NavList isOpen={isOpen}>
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#sobre-mi">Sobre mí</NavLink>
          <NavLink href="#contacto">Contactame</NavLink>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

// Barra que contiene el logo y los botones de las secciones 
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh;
  width: 100%;
  background-color: #36393F;
  color: white;
  height: 2.5%; 
  position: fixed;
  top: 0;
  z-index: 1000;
  
`;


const Nav = styled.nav`
  display: flex;
`;

// Lista de los botones de las secciones en el header, aqui se puede modificar su espacio
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 7vh;
  margin-right: 7vh;
  font-size: 170%;
  font-family: 'Inconsolata', monospace; 

  @media (max-width: 1440px) {
    gap: 5vh;
    font-size: 150%;
  }
  @media (max-width: 1024px) {
    gap: 2vh;
    font-size: 120%;
  }

  @media (max-width: 485px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background-color: #36393F;
    width: 100%;
    padding: 2rem 0;
    gap: 1rem;
    margin-right: 0;
    text-align: center;
  }
  
 

`;



const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


// Para el menu de Hamburguesa que se crea cuando el tamaño de la pantalla es muy reducido

const BurgerMenu = styled.div`
  display: none;   /*Aqui hace que no se mire */
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  margin-right: 2.7rem;
  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 5px;
    transition: 0.3s;
  }

  /* Mostrar solo en pantallas menores a 485px */
  @media (max-width: 485px) {
    display: flex;
  }
`;

export default Header;



