import Styled from 'styled-components'
import Link from 'next/link'

const Container = Styled.section`
  margin: 30px auto;
  width: max(50vw, 350px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`

const PostStyle = Styled.div`
  width: max(45%, 350px);
  opacity: 0;

  animation: deslizarCima 0.5s ease-out;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;

  span {
    margin: 10px;
    display: block;
    text-align: right;
    font-size: 0.7rem;
  }
`

const Feed = ({posts}) => {
  return(
    <Container>
      {posts.map( ({dados, conteudo}) => (
        <PostStyle key={dados.link}>
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