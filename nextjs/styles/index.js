import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i');
  @import url('https://fonts.googleapis.com/css?family=Roboto:500,700');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: ${props => props.isBigText || '16px'};
  }

  body {
    width: 100vw;
    padding: 0 0.8889rem;
    height: auto;
    font-family: 'Noto Sans', sans-serif;
  }

  @media screen and (min-width: 900px) {
    body {
      width: 100vw;
      padding: 0 8rem;
    }
  }

  :root {
   --primary-yellow: #FFA14A;
   --primary-purple: #A8A0FF;
   --primary-blue: #90B9F6;
   --primary-green: #32CBC2;
   --primary-pink: #FD92DF;
   --primary-red: #FF9797;
   --secondary-yellow: #834710;
   --secondary-purple: #5048A3;
   --secondary-blue: #1C53A5;
   --secondary-green: #206A66;
   --secondary-pink: #8F3275;
   --secondary-red: #9B3030;
   --primary-tint-purple: #B1AAFF;
   --primary-tint-red: #FFA2A2;
   --primary-tint-yellow: #FFAA5C;
   --primary-tint-green: #47D0C8;
   --primary-tint-blue: #7DACFD;
   --primary-tint-pink: #FD9DE2;
   --secondary-tint-purple: #5951A8;
   --secondary-tint-red: #A03A3A;
   --secondary-tint-yellow: #89501C;
   --secondary-tint-green: #2B716E;
   --secondary-tint-blue: #275CA9;
   --secondary-tint-pink: #953C7C;

   --test: url('../static/images/Pattern_Circle_1920x1080.svg');
 }
`;

export default GlobalStyle;
