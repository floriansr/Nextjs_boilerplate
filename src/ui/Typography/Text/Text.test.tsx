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
});
