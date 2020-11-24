import * as React from 'react';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import light from 'styles/Themes/Light';

import AppNav from 'components/AppNav';
import NpTopProgressBar from 'components/NProgress/config';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <NpTopProgressBar />
        <AppNav />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
