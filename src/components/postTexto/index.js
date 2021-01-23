import {Container} from './style'

const PostTexto = ({texto, children}) => {
  return (
    <Container>
      <h1>{children}</h1>
      <div dangerouslySetInnerHTML={{__html: texto}}></div>
    </Container>
  )
}

export default PostTexto