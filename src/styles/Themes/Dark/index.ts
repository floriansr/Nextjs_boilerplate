import type { DefaultTheme } from 'styled-components';

import { colors } from 'styles/Modules';
import baseTheme from 'styles/Themes/Base';

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: colors.gray[900],
    text: colors.white,
    link: colors.blue[400],
    primary: colors.orange[700],
    secondary: colors.purple[700],
    tertiary: colors.green[700]
  }
};

export default theme;
