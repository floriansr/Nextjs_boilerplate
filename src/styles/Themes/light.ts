import type { DefaultTheme } from 'styled-components';
import colors from 'styles/Modules/Colors';
import baseTheme from 'styles/Themes/Base';

const theme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: colors.white,
    text: colors.dark,
    link: colors.blue[600],
    primary: colors.orange[600],
    secondary: colors.purple[600],
    tertiary: colors.green[600]
  }
};

export default theme;
