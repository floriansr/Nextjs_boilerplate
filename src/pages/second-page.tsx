import AppBox from 'ui/AppBox';
import { Heading, HeadingSize, Text } from 'ui/Typography';

import { AppHead, Page } from 'components';

const Second_page = () => {
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
