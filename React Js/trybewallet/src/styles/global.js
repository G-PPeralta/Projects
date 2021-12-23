import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: #F0F2F5; */

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width:  720px) {
      font-size: 87.5%;
    }
  }
}
`;

export default GlobalStyle;
