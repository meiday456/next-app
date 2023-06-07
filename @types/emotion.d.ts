import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {[key in string]: string};
  }
}
