import * as React from 'react';

import { NextPage } from 'next';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BREAKPOINTS } from 'styles/Modules/Variables';

import { DefaultRouterPageVariants } from 'tools/Framer-Motion';

interface Props {
  children: React.ReactNode;
  readonly as?: string;
  readonly noDefaultTransition?: boolean;
}

const PageInner = styled(motion.div)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  transform-origin: left center;
  max-width: 90vw;
  margin: 0 auto;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    min-width: 70vw;
  }
`;

const Page: NextPage<Props> = ({
  children,
  as = 'div',
  noDefaultTransition = false,
  ...rest
}: Props) =>
  React.createElement(
    // @ts-ignore
    motion[as],
    {
      exit: 'exit',
      initial: 'exit',
      animate: 'enter',
      className: 'router__wrapper'
    },
    <PageInner
      {...rest}
      {...(noDefaultTransition ? {} : { variants: DefaultRouterPageVariants })}>
      {children}
    </PageInner>
  );

export default Page;
