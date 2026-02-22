import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 16px;
    line-height: 1.5;
    
    /* Smooth scrolling */
    scroll-behavior: smooth;
    
    /* Disable text selection on mobile for app-feel */
    -webkit-user-select: none;
    user-select: none;
  }

  /* Heading Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  /* Link & Button Reset */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* Input Reset */
  input, textarea, select {
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.text};
    -webkit-user-select: text; /* Allow text selection in inputs */
    user-select: text;
  }

  /* Utility Classes */
  .text-gradient {
    background: ${({ theme }) => theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
  }

  /* Scrollbar for webkit */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  /* Root Container for Full Height */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
