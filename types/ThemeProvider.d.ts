/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';
import { theme } from '../styles/theme';

type ThemeInterface = {
  color: {
    PRIMARY_COLOR: string;
    SECONDARY_COLOR: string;
    TEXT_COLOR: string;
    BG: string;
    BUTTON_BG: string;
    BUTTON_TEXT: string;
  };
  fonts: {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
  };
};

declare module 'styled-components/native' {
  interface DefaultTheme extends ThemeInterface {}
}
