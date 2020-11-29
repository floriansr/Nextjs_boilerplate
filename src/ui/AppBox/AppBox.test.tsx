import * as React from 'react';

import { render } from '@testing-library/react';

import AppBox from './index';

describe('<AppBox />', () => {
  const TEXT = 'Hello world';

  it('AppBox tree', () => {
    const tree = render(<AppBox />);
    expect(tree).toMatchSnapshot();
  });

  it('should render as a div', () => {
    const { container } = render(<AppBox>{TEXT}</AppBox>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should render as the specified node in the as prop then rerender component', () => {
    const tree = render(<AppBox as="span">{TEXT}</AppBox>);
    expect(tree.getByText(TEXT).nodeName).toBe('SPAN');

    tree.rerender(<AppBox as="p">{TEXT}</AppBox>);
    expect(tree.getByText(TEXT).nodeName).toBe('P');
  });
});
