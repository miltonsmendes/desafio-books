import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --text-light: #FFFFFF;
    --text-dark: #333333;
    --text-pink: #b22e6f;
    --text-pink-dark: #AB2680;

    --background-light: #FFFFFF;
    --background-dark: #00000052;

    --shadow: #54105f21;
    --shadow-hover: #54105F52;
    --shadow-image: #00000026;

}


background: red;
 
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     -webkit-font-smoothing: antialiased;
 }

`;
