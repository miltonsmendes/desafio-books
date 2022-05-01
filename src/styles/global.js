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

    --grey: #999999;

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

 .react-modal-overlay{
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content{
    width: 100%;
    height: 608px;
    max-width: 769px;
    /* max-height: 608px; */
    background: var(--background-light);

    border-radius: 4px;
    box-shadow: 0px 16px 80px 0px #00000052;

    @media (max-width: 600px) {
      height: auto;
      width: 90%;
    }
  }


`;
