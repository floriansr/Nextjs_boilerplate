import * as React from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import light from 'styles/Themes/light';

import NpTopProgressBar from 'components/NProgress/config';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <NpTopProgressBar />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </>
  );
};

export default App;
