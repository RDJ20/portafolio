import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
const Header = () => {
    return (
        <HeaderContainer>
      <Logo />
      <Nav>
        <NavList>
          <NavItem><NavLink href="#inicio">Inicio</NavLink></NavItem>
          <NavItem><NavLink href="#proyectos">Proyectos</NavLink></NavItem>
          <NavItem><NavLink href="#sobre-mi">Sobre mí</NavLink></NavItem>
          <NavItem><NavLink href="#contacto">Contactame</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  width: 100%;
  background-color: #36393F;
  color: white;
  height: 3%; 
  position: fixed;
  top: 0;
  z-index: 1000;
  

  @media (max-width: 1440px) {
    padding: 2%;
    height: 3%; 
  }
  
  @media (max-width: 1024px) {
    padding: 1.5%;
    height: 3%; 
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 100px;
  margin-right: 70px;
  font-size: 170%;
  font-family: 'Inconsolata', monospace; 

  @media (max-width: 1440px) {
    gap: 45px;
    font-size: 170%;
  }
  @media (max-width: 1024px) {
    gap: 45px;
    font-size: 130%;
  }

`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;