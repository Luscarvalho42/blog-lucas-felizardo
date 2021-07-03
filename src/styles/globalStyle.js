import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @keyframes deslizarCima {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export default GlobalStyle