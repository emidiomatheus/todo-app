import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #0CCE6B;
    --red: #E83151;
    --yellow: #F0A202;
    
    --text: #FFFFFF;
    --gray-900: #121212;
    --gray-800: #202021;
    --gray-500: #505050;
    --gray-300: #A5A5A5;
    
    --teal-700: #124559;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-900);
    color: #fff;
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  :focus {
    outline: 3px solid #EFF6EE;
  }
`