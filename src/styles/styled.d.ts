import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      green: string;
      red: string;
      gray: {
        300: string;
        400: string;
        500: string;
        800: string;
        900: string;
      }
    }
  }
}