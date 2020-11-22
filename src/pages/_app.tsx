import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    text-decoration: underline;
  }
  img {
    border: 0px;
    width: 100%;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
