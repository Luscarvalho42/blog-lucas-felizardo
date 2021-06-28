import Styled from 'styled-components'
import Link from 'next/link'

const Container = Styled.section`
  margin: 30px auto;
  width: 920px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;

  @media (max-width: 919px) {
    width: 610px;
  }

  @media (max-width: 615px) {
    width: 300px;
  }
`

const PostStyle = Styled.div`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #33333330;
  width: 300px;
  opacity: 0;
  cursor: pointer;

  animation: deslizarCima 0.5s ease-out;
  transition: 0.2s;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;

  span {
    margin: 10px;
    display: block;
    text-align: right;
    font-size: 0.7rem;
  }

  &:hover {
    border: 4px solid #DF3E47;
  }
`

const Feed = ({posts}) => {
  return(
    <Container>
      {posts.map( ({dados, conteudo}) => (
          <Link href={`/post/${dados.link}`}>
            <PostStyle key={dados.link}>
              <a> <h1>{dados.titulo}</h1> </a>
              <p>{dados.resumo}</p>
            </PostStyle>
          </Link>
      ))}
    </Container>
  )
}

export default Feed