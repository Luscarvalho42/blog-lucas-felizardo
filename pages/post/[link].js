import { useState } from 'react'
import { useCookies } from 'react-cookie';

import temaClaro from '../../src/styles/temaClaro'
import temaEscuro from '../../src/styles/temaEscuro'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../src/styles/globalStyle'

import Titulo from '../../src/components/titulo'
import Cabecalho from '../../src/components/cabecalho'

import { getAllPosts, getPostLink } from '../../scripts/getPosts'

const Post = ({ post }) => {
  // Inicia com o tema armazenado no Cookie
  const [cookies, setCookie] = useCookies(['tema'])
  const [tema, atualizarTema] = useState(() => {
    if(cookies.tema == 'temaEscuro') {
      return temaEscuro
    } else {
      return temaClaro
    }
  })

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Titulo>Blog Lucas Felizardo | {post.dados.titulo}</Titulo>
      <Cabecalho atualizarTema={atualizarTema} setCookie={setCookie}/>
      <h1>{post.dados.titulo}</h1>
    </ThemeProvider>
  )
}

export async function getStaticProps({ params })  {
  const post = getPostLink(params.link)
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const caminhos = []

  posts.forEach(post => {
    let caminho = {
      params: {
        link: post.dados.link
      }
    }
    caminhos.push(caminho)
  })

  return {
    paths: caminhos,
    fallback: false
  }
}


export default Post
