import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.texto};
    font-family: roboto
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.destaque};
    margin-bottom: 10px;
    text-transform: capitalize;
  }
`

export default GlobalStyle