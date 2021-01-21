import { useState } from 'react'

import getAllPosts from '../scripts/getAllPosts'
import getTemaAtual from '../scripts/getTemaAtual'
import temaClaro from '../src/styles/temaClaro'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/globalStyle'

import Titulo from '../src/components/titulo'
import Cabecalho from '../src/components/cabecalho'
import Feed from '../src/components/feed'

const Home = (props) => {
  const [tema, atualizarTema] = useState(temaClaro)

  return(
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Titulo>Blog Lucas Felizardo | Home</Titulo>
      <Cabecalho atualizarTema={atualizarTema}/>
      <Feed posts={props.posts}/>

    </ThemeProvider>
  )
}

export async function getStaticProps(req)  {
  const posts = getAllPosts()
  console.log(posts[1].conteudo)
  return {
    props: {
      posts
    }
  }
}


export default Home
