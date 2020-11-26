import * as React from 'react';

import AppBox from 'ui/AppBox';
import { Heading, HeadingSize, Text } from 'ui/Typography';

import { AppHead, Page } from 'components';

const Second_page: React.FC = () => {
  return (
    <>
      <Page>
        <AppHead title="About" />
        <Heading as="h1" size={HeadingSize.Xl}>
          About Page
        </Heading>
        <AppBox mt={2}>
          <Text>Hello from about page</Text>
        </AppBox>
      </Page>
    </>
  );
};

export default Second_page;
