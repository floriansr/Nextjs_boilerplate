import * as React from 'react';

import NextNProgress from 'components/NProgress';

const NpTopProgressBar = React.memo(() => {
  return (
    <NextNProgress
      options={{ easing: 'ease', speed: 200 }}
      color="#29D"
      startPosition={0.3}
      stopDelayMs={500}
      height={2}
    />
  );
});

export default NpTopProgressBar;
