import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  html {
    margin:0;
    font-display: 'Work Sans', sans-serif;
    font-size: 16px;
  }

  .content{
    height: 200vh;
    background-color: #333;
    background-blend-mode: multiply;
    background-size: cover;
    display: grid;
    place-items: center;
  }

`;

export default GlobalStyle;
