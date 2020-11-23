import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout, siteTitle } from 'components/manager';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
          <h1>Hello, world!</h1>
          <Link href="/second-page">
            <a>second page</a>
          </Link>
        </Container>
      </Layout>
      ;
    </>
  );
};

export default Home;
