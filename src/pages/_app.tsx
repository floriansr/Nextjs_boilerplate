import * as React from 'react';

import { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import light from 'styles/Themes/Light';

import AppNav from 'components/AppNav';
import NpTopProgressBar from 'components/NProgress/config';

const App: React.FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
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
