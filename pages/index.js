import { useState } from 'react'
import { useCookies } from 'react-cookie';
import { getAllPosts } from '../scripts/getPosts'

// Controla o tema
import { CookiesProvider } from 'react-cookie'
import TemaClaro from '../src/styles/TemaClaro'
import TemaEscuro from '../src/styles/TemaEscuro'

// Controla o estilo
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/globalStyle'

// Componentes
import Titulo from '../src/components/Titulo'
import Cabecalho from '../src/components/Cabecalho'
import Feed from '../src/components/Feed'

const StyledIndex = styled.div`
  background-color: ${({theme}) => theme.cores.background};
  color: ${({theme}) => theme.cores.texto};
  fill: ${({theme}) => theme.cores.texto};
  min-height: 100vh;
`

function Home(props) {
  // Inicia com o tema armazenado no Cookie
  const [cookies, setCookie] = useCookies(['tema'])
  const [tema, atualizarTema] = useState(() => {
    if(cookies.tema == 'TemaEscuro') {
      return TemaEscuro
    } else {
      return TemaClaro
    }
  })
  return(
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <StyledIndex>
          <Titulo>Blog Lucas Felizardo | Home</Titulo>
          <Cabecalho atualizarTema={atualizarTema} setCookie={setCookie} cookies={cookies}/>
          <Feed posts={props.posts}/>
        </StyledIndex>
      </ThemeProvider>
  )
}

export async function getStaticProps()  {
  const posts = getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}

export default Home
