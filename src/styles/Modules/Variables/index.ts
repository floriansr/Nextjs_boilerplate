import { css } from 'styled-components';
import { Breakpoints } from 'types/styled-components/theme';

import { theme } from 'styles/Themes';
import { breakpoints } from 'styles/Themes/Base';

export const BREAKPOINTS: Breakpoints = breakpoints;

export const ELASTIC_BEZIER = 'cubic-bezier(0.32, 2, 0.55, 0.27)';

export const MAIN_BACKGROUND = css`
  background: ${(props): string => theme(props).colors.background};
`;
