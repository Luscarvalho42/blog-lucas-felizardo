import { useState } from 'react'
import { useCookies } from 'react-cookie';

// Controla o tema
import { getAllPosts } from '../scripts/getPosts'
import temaClaro from '../src/styles/temaClaro'
import temaEscuro from '../src/styles/temaEscuro'

// Controla o estilo
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/globalStyle'

// Componentes
import Titulo from '../src/components/Titulo'
import Cabecalho from '../src/components/Cabecalho'
import Feed from '../src/components/Feed'

function Home(props) {
  // Inicia com o tema armazenado no Cookie
  const [cookies, setCookie] = useCookies(['tema'])
  const [tema, atualizarTema] = useState(() => {
    if(cookies.tema == 'temaEscuro') {
      return temaEscuro
    } else {
      return temaClaro
    }
  })

  return(
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Titulo>Blog Lucas Felizardo | Home</Titulo>
      <Cabecalho atualizarTema={atualizarTema} setCookie={setCookie}/>
      <Feed posts={props.posts}/>
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
