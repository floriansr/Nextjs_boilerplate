import type { DefaultTheme } from 'styled-components';

import { default as dark } from 'styles/Themes/Dark';
import { default as light } from 'styles/Themes/Light';

export const theme = <Props extends { theme: DefaultTheme }>(props: Props) => props.theme;

export { dark, light };
