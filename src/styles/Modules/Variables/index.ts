import { css } from 'styled-components';
import { theme } from 'styles/Themes';
import { breakpoints } from 'styles/Themes/Base';
import { Breakpoints } from 'types/styled-components/theme';

export const BREAKPOINTS: Breakpoints = breakpoints;

export const ELASTIC_BEZIER = 'cubic-bezier(0.32, 2, 0.55, 0.27)';

export const MAIN_BACKGROUND = css`
  background: ${(props) => theme(props).colors.background};
`;
