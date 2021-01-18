// import { getAllPosts } from '../../scripts/post'
// import fs from 'fs';

import { Container, PostStyle } from './style'

const Post = (props) => {
  return (
    <PostStyle>
      <h1>{props.titulo}</h1>
      <p>{props.children}</p>
    </PostStyle>
  )
}

const Feed = () => {
  return(
    <Container>
      <Post titulo="Post 1 do blog">
        Reprehenderit Lorem incididunt laborum voluptate fugiat occaecat excepteur cupidatat deserunt consectetur voluptate qui. 
      </Post>
      <Post titulo="Aliqua in adipisicing commodo non ea.">
        Aute irure mollit excepteur consectetur culpa pariatur ad. Occaecat exercitation cillum excepteur est culpa anim. Veniam laborum Lorem et veniam occaecat exercitation dolore et laboris. 
      </Post>
      <Post titulo="Cupidatat tempor eiusmo.">
        Lorem cillum ex consectetur fugiat elit deserunt aliqua cupidatat ut exercitation aliqua ullamco laborum est. 
      </Post>
      <Post titulo="Ut ad ipsum labore Lorem laboris excepteur.">
        Adipisicing qui ex quis sint amet reprehenderit elit fugiat Lorem mollit. Sint dolore sit cupidatat nostrud tempor cupidatat ex ullamco. 
      </Post>
      
    </Container>
  )
}

Feed.getInitialProps = () => {
  // const allPosts = getAllPosts()
  // console.log(fs.readdirSync('../_post'))
  
  console.log(allPosts)

  return {
    posts: allPosts
  }
}

export default Feed