---
titulo: 'Cupidatat aliqua proident occaeca'
data: '25-01-2021'
resumo: 'Labore aute enim dolor reprehenderit deserunt irure elit reprehenderit aliqua in sunt. Do qui ad culpa laborum mollit. Excepteur quis dolore tempor ea adipisicing laborum pariatur.'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
Tristique senectus et netus et malesuada fames ac turpis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

![Alt ou título da imagem](/perfil.png)

Lorem ullamco adipisicing ea irure aliquip magna pariatur nostrud dolor. Lorem consequat est tempor non dolor. Quis in amet elit enim sunt anim mollit eu aute. Aute ut mollit pariatur Lorem do amet amet ex et amet laboris ex. Pariatur nisi ullamco do amet ad veniam nostrud culpa laboris minim elit proident et. Aute eiusmod non aliquip cupidatat culpa do minim. Ea sit incididunt sunt ad pariatur ullamco fugiat labore enim reprehenderit qui et anim in.

Tristique senectus et netus et malesuada fames ac turpis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

## Officia veniam ea adipisicing proident quis ipsum

Ex minim laboris anim laboris nulla ipsum minim quis nulla enim qui ex cupidatat. Sunt anim laborum reprehenderit non elit eiusmod dolore excepteur. Dolor sunt exercitation ex ex excepteur commodo labore veniam tempor tempor. Excepteur nostrud sunt adipisicing ad veniam ullamco magna sunt magna eu id. Laboris excepteur quis duis voluptate incididunt eu ut deserunt culpa proident.

### Proident magna ad adipisicing
Ullamco eiusmod sint non duis incididunt proident aute esse voluptate laborum laboris nostrud qui dolore. Elit non anim sit occaecat dolore ea ea cillum reprehenderit commodo. Eu eiusmod officia amet eiusmod aliqua pariatur dolore ex occaecat irure veniam commodo. Eiusmod est proident duis aute veniam laborum occaecat eu exercitation non Lorem. Mollit velit qui exercitation consectetur cupidatat dolore do. Occaecat fugiat sit nulla sit. Irure id incididunt amet ut dolore nulla eu et ipsum aliqua amet esse.

```
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
```