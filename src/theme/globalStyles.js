// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1,h2,h3, p {
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

`;
 
export default GlobalStyle;