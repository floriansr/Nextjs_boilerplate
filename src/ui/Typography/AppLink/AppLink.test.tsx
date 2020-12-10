import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import light from 'styles/Themes/Light';
import dark from 'styles/Themes/Dark';

import { render } from '@testing-library/react';

import AppLink from './index';

describe('<AppLink />', () => {
  const TEXT = 'Hello world';

  it('AppLink tree', () => {
    const tree = render(
      <ThemeProvider theme={light}>
        <AppLink href="/" />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });

  it('AppLink passHref', () => {
    const { container } = render(
      <ThemeProvider theme={light}>
        <AppLink href="/" />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render as a link', () => {
    const { container } = render(
      <ThemeProvider theme={light}>
        <AppLink href="/">{TEXT}</AppLink>
      </ThemeProvider>
    );
    expect(container.firstChild?.nodeName).toBe('A');
  });

  it('should render as A element then rerender component', () => {
    const tree = render(
      <ThemeProvider theme={light}>
        <AppLink href="/">{TEXT}</AppLink>
      </ThemeProvider>
    );
    expect(tree.getByText(TEXT).nodeName).toBe('A');

    tree.rerender(
      <ThemeProvider theme={light}>
        <AppLink href="/">{TEXT}</AppLink>
      </ThemeProvider>
    );
    expect(tree.getByText(TEXT).nodeName).toBe('A');
  });

  it('color theme light', () => {
    const { container } = render(
      <ThemeProvider theme={light}>
        <AppLink href="/" />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      color: 'rgb(37, 99, 235)'
    });
  });

  it('color theme dark', () => {
    const { container } = render(
      <ThemeProvider theme={dark}>
        <AppLink href="/" />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      color: 'rgb(96, 165, 250)'
    });
  });
});
