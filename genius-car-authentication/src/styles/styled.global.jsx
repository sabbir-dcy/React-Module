import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size : 18px;
    font-family: 'niramit', sans-serif;
  }
  
  input, button {
    font-size : inherit;
    font-family : inherit;
    font-weight: 500;
  }
  button {
    border: none;
    padding: 1rem;
    cursor: pointer;
    transition: .2s ease;
  }
`