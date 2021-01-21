import temaClaro from '../../src/styles/temaClaro'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../src/styles/globalStyle'

import Titulo from '../../src/components/titulo'
import Cabecalho from '../../src/components/cabecalho'

import { getAllPosts, getPostLink } from '../../scripts/getPosts'

const Post = ({ post }) => {
  return (
    <ThemeProvider theme={temaClaro}>
      <GlobalStyle />
      <Titulo>Blog Lucas Felizardo | Sou um post</Titulo>
      <Cabecalho />
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
