import { Container, PostStyle } from './style'

const Feed = ({posts}) => {
  return(
    <Container>
        {posts.map( ({dados, conteudo}) => (
          <PostStyle>
            <h1>{dados.titulo}</h1>
            <p>{dados.resumo}</p>
            <div className="content" dangerouslySetInnerHTML={{__html: conteudo}}></div>
          </PostStyle>
        ))}
    </Container>
  )
}

export default Feed