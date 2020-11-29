import * as React from 'react';

import { render } from '@testing-library/react';

import AppLink from './index';

describe('<AppLink />', () => {
  const TEXT = 'Hello world';

  it('AppLink tree', () => {
    const tree = render(<AppLink href="/" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render as a link', () => {
    const { container } = render(<AppLink href="/">{TEXT}</AppLink>);
    expect(container.firstChild?.nodeName).toBe('A');
  });

  it('should render as A element then rerender component', () => {
    const tree = render(<AppLink href="/">{TEXT}</AppLink>);
    expect(tree.getByText(TEXT).nodeName).toBe('A');

    tree.rerender(<AppLink href="/">{TEXT}</AppLink>);
    expect(tree.getByText(TEXT).nodeName).toBe('A');
  });

  it('should render as the specified node in the as & color theme provider', () => {
    const { container } = render(<AppLink href="/" color="red" />);
    expect(container.firstChild?.nodeName).toBe('A');
    expect(container.firstChild).toHaveStyle({
      color: 'red',
      'font-weight': 'semibold',
      'font-family': 'body',
      'line-height': 'base'
    });
  });
});
