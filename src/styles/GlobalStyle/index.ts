import { createGlobalStyle } from 'styled-components';
import reset from 'styles/Modules/Reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }
  body {
    font-family: Arial, Helvetica, Verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
  }
  h1 {
    font-size: 4rem;
  }
  a {
    color: #bf9e5f;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }
  img {
    border: 0px;
    width: 100%;
  }
`;

export default GlobalStyle;
