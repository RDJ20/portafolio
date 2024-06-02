import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Contactame from './components/Contactame';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import FixedLabel from './components/FixedLabel';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let current = 'inicio';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        current = section.getAttribute('id');
      }
    });
    setCurrentSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Main>
      <Section id="Inicio">
        <Inicio />
      </Section>
      <Section id="Proyectos">
        <Proyectos />
      </Section>
      <Section id="Sobre-mi">
        <SobreMi />
      </Section>
      <Section id="Contacto">
        <Contactame />
      </Section>
      <FixedLabel text={currentSection} />
      </Main>
    </div>
  );
}

const Main = styled.main` 
 
`;

const Section = styled.section`

`;
export default App;
