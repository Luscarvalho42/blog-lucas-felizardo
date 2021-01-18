import { useState } from 'react'

import cookie from "cookie";

import { ThemeProvider } from 'styled-components'
import temaClaro from '../styles/temaClaro'
import temaEscuro from '../styles/temaEscuro'
import GlobalStyle from '../styles/globalStyle'

import Titulo from '../components/titulo'
import Cabecalho from '../components/cabecalho'
import Feed from '../components/feed'

const Home = ({temaSalvo}) => {
  const [tema, atualizarTema] = useState(temaSalvo)


  return(
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Titulo>Blog Lucas Felizardo | Home</Titulo>
      <Cabecalho atualizarTema={atualizarTema}/>
      <Feed />

    </ThemeProvider>
  )
}

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  const tema = cookies.tema == 'temaEscuro' ? temaEscuro : temaClaro
  return { temaSalvo: tema }
}


export default Home