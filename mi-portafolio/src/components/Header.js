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
  

  @media (max-width: 1500px) {
    padding: 2%;
    height: 3%; 
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
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