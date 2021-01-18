import fs from 'fs'

export async function getAllPosts() {
  console.log(fs.readdirSync('../_post'))
  return('a')
}

export const getPostTitulo = (titulo) => {
  getAllPosts.map((post) => {
    if(post.titulo == titulo) {
      return post;
    }
  })

  return ''
}