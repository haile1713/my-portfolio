import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import { theme } from './styles/theme';
import Work from './components/Work';
import NoteworthyProjects from './components/NoteworthyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work /> 
        <NoteworthyProjects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App; // Make sure to export App as default
