import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #0a192f;
    color: #ccd6f6;
    line-height: 1.6;
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }

  a {
    color: #64ffda;
    text-decoration: none;
  }
  /* Media queries for responsiveness */
  @media (max-width: 1024px) {
    body {
      font-size: 16px; /* Adjust base font size for tablets */
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px; /* Adjust base font size for mobile */
    }
  }
`;

export default GlobalStyle;
