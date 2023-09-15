import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: {
      normal: string;
    };
    white: {
      normal: string;
    };
    blue: {
      darker: string;
      lighter: string;
    };
  }
}
