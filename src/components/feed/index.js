import { Container, PostStyle } from './style'
import Link from 'next/link'

const Feed = ({posts}) => {
  return(
    <Container>
      {posts.map( ({dados, conteudo}) => (
        <PostStyle>
          <Link href={`/post/${dados.link}`}>
            <a> <h1>{dados.titulo}</h1> </a>
          </Link>
          <p>{dados.resumo}</p>
        </PostStyle>
      ))}
    </Container>
  )
}

export default Feed