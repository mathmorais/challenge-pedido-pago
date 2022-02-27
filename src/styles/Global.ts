import { css } from "@emotion/react";
import { colors } from "../constants/colors";

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:root {
    font-size: 62.5%;
  }

  body {
    color: ${colors.neutral.black};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
