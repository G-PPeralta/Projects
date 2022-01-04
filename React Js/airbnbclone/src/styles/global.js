import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  section {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    overflow-x: auto;
  }
`