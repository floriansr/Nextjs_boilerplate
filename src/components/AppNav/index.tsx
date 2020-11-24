import * as React from 'react';

import AppBox from 'ui/AppBox';
import { AppLink } from 'ui/Typography';

const AppNav: React.FC = () => (
  <AppBox as="nav" p={4}>
    <AppBox as="ul" display="flex">
      <AppBox as="li" marginRight={2}>
        <AppLink href="/">Home</AppLink>
      </AppBox>
      <AppBox as="li" marginRight={2}>
        <AppLink href="/second-page">Second page</AppLink>
      </AppBox>
    </AppBox>
  </AppBox>
);

export default AppNav;
