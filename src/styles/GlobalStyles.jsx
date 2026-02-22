import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.main};
    overflow-x: hidden;
    min-height: 100vh;
    /* PWA mobile behavior */
    overscroll-behavior-y: none;
    -webkit-user-select: none;
    user-select: none;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Custom scrollbar for Cosmic look */
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.surface};
    border-radius: 10px;
  }
`;

export default GlobalStyles;
