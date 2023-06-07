import React, {ReactElement} from "react";
import {css, Global, useTheme} from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyle = (): ReactElement => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${emotionReset};

        body {
          background-color: #040714;
          color: #f9f9f9;
          font-family: Avenir-Roman, sans-serif;
          margin: 0;
          padding: 0;

          --color-green: #27ae60;
          --color-yellow: #f1c40f;
          --color-red: #e74c3c;
          --color-white50: ${theme.colors.white50};
          --color-white30: ${theme.colors.white30};
          --color-white20: ${theme.colors.white20};
          --color-white10: ${theme.colors.white10};
          --color-white5: ${theme.colors.white5};
        }

        a {
          color: #f9f9f9;
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
