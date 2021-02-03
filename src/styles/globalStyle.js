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

  h1 {
    display: block;
    text-align: left;
  }

  p {
    margin-top: 10px;
    text-indent: 1.5rem;
  }

  a { 
    text-decoration: none;

    h1 { 
      transition: 0.5s ease-in-out;
    }
    h1:hover {
      background-color: ${(props) => props.theme.destaque};
      color: ${(props) => props.theme.background};
    }
  }

  img {
    max-width: 90%;
    max-height: 50vh;
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