/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';
import { theme } from '../styles/theme';

export interface ThemeInterface {
  color: {
    primary: string;
    secondary: string;
    black: string;
    grey: string;
    bg: string;
    pale_grey: string;
    btn_bg: string;
    btn_text: string;
  };
  fonts: {
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
    extra: string;
  };
}

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeInterface {}
}
