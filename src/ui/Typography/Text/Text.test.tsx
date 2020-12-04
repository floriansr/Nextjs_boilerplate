import * as React from 'react';

import { render } from '@testing-library/react';

import Text from './index';

describe('<Text />', () => {
  const TEXT = 'Hello world';

  it('Text tree', () => {
    const tree = render(<Text />);
    expect(tree).toMatchSnapshot();
  });

  it('should render as a p', () => {
    const { container } = render(<Text>{TEXT}</Text>);
    expect(container.firstChild?.nodeName).toBe('P');
  });

  it('Text component with truncate', () => {
    const { container } = render(<Text truncate={10}>{TEXT}</Text>);
    expect(container.firstElementChild?.attributes[0].nodeName).toBe('title');
    expect(container.firstElementChild?.attributes[0].value).toBe(TEXT);
    expect(container.firstElementChild?.textContent).toBe(
      TEXT.slice(0, 10) + '…'
    );
  });

  it('Text component without truncate (title)', () => {
    const { container } = render(<Text>{TEXT}</Text>);
    expect(container.firstElementChild?.attributes.length).toBe(1); // class
  });
});
