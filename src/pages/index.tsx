import * as React from 'react';

import AppBox from 'ui/AppBox';
import { Heading, Text } from 'ui/Typography';

import { AppHead, Page } from 'components';

const Home: React.FC = () => {
  return (
    <>
      <Page>
        <AppHead title="Homepage" />
        <Heading as="h1">Index Page</Heading>
        <AppBox mt={2} width={1 / 2}>
          <Text bg="gray.200" color="red.400">
            Hello from index page
          </Text>
        </AppBox>
      </Page>
    </>
  );
};

export default Home;
