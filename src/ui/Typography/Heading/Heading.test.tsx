import * as React from 'react';

import { render } from '@testing-library/react';

import Heading, { HeadingSize } from './index';

describe('<Heading />', () => {
  const TEXT = 'Hello world';

  it('Heading tree', () => {
    const tree = render(<Heading />);
    expect(tree).toMatchSnapshot();
  });

  it('should render as h2', () => {
    const { container } = render(<Heading>{TEXT}</Heading>);
    expect(container.firstChild?.nodeName).toBe('H2');
  });

  it('should render as the specified node in the as prop then rerender component', () => {
    const tree = render(<Heading as="h3">{TEXT}</Heading>);
    expect(tree.getByText(TEXT).nodeName).toBe('H3');

    tree.rerender(<Heading as="h6">{TEXT}</Heading>);
    expect(tree.getByText(TEXT).nodeName).toBe('H6');
  });

  it('should render font-style as in the size prop', () => {
    const { container } = render(<Heading size={HeadingSize.Sm} />);
    expect(container.firstChild).toHaveStyle({ 'font-size': '1.5em' });
  });

  it('should render as the specified node in the as & size props', () => {
    const { container } = render(<Heading as="h3" size={HeadingSize.Sm} />);
    expect(container.firstChild?.nodeName).toBe('H3');
    expect(container.firstChild).toHaveStyle({ 'font-size': '1.17em' });
  });

  it('should render as the specified node in the as & color theme provider', () => {
    const { container } = render(<Heading as="h5" color="red" />);
    expect(container.firstChild?.nodeName).toBe('H5');
    expect(container.firstChild).toHaveStyle({ color: 'red' });
  });

  it('should render as the specified node in the as, size props & color theme provider', () => {
    const { container } = render(
      <Heading as="h6" size={HeadingSize.Xl} color="blue">
        {TEXT}
      </Heading>
    );
    expect(container.firstChild?.nodeName).toBe('H6');
    expect(container.firstChild).toHaveStyle({
      color: 'blue',
      'font-size': '.67em'
    });
  });
});
