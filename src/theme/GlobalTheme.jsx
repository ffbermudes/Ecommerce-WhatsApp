import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalTheme;
