import Styled from 'styled-components'
import Link from 'next/link'

const Container = Styled.article`
  margin: 30px auto;
  width: max(50vw, 350px);
  animation: deslizarCima .5s ease-in-out forwards;
  opacity: 0;

  span {
    display: block;
    color: #555;
    font-size: 0.8em;
    margin: 0 0 30px 10px;
  }

  h1 {
    text-align: left;
    color: ${(props) => props.theme.destaque};
    padding: 2px 5px;
    display: inline-block;
    border: 2px solid ${(props) => props.theme.destaque}
  }

  h2 {
    font-size: 1.4rem;
    margin: 30px 0px 20px;
    border-bottom: 2px solid ${(props) => props.theme.destaque};
  }

  h3 {
    margin: 30px 0px 10px;
  }

  p {
    font-size: 1.1rem;
    margin: 5px;
    line-height: 1.5rem;
  }

  img {
    max-width: 90%;
    max-height: 50vh;
    display: block;
    margin: 20px auto;
  }

  pre {
    margin: 15px 0;
    padding: 10px 0;
    background-color: #ddd;
    color: #333;
    display: flex;
    justify-content: center;

    code {
      border-left: 1px solid #aaa;
      padding: 10px 0px 5px 10px;
    }
  }

  ul {
    margin: 10px 0 0 30px;
    list-style-type: none;
  }

  li::before {
    content: "o\t";
    color: ${(props) => props.theme.destaque};
  }
`

const BtnVoltar = Styled.div`
  padding 5px;
  margin-top: -20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  fill: ${(props) => props.theme.destaque};
  cursor: pointer;
  opacity: .7;
  transition: 0.3s;

  &:hover {    
    opacity: 1;
  }

  h3 {
    margin: 0;
  }
`

function Voltar() {
  return (
    <Link href="/">
      <BtnVoltar>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/></svg>
        <h3>Voltar</h3>
      </BtnVoltar>
    </Link>
  )
}


const PostTexto = ({texto, children, data}) => {
  return (
    <Container>
      <Voltar />
      <h1>{children}</h1>
      <span>{data}</span>
      <div dangerouslySetInnerHTML={{__html: texto}}></div>
    </Container>
  )
}

export default PostTexto