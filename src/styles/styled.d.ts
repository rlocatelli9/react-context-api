import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;
      active: string;
      deactivate: string;
      background: string;
      text: string;
      icon: string;
    }
  }
}

