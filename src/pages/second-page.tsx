import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout } from 'components/manager';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

const Second_page = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Second_page</title>
        </Head>
        <Container>
          <h1>Hello, user!</h1>
          <Link href="/">
            <a>First page</a>
          </Link>
        </Container>
      </Layout>
      ;
    </>
  );
};

export default Second_page;
