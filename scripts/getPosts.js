import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

export const getAllPosts = () => {
  const arquivosMD = fs.readdirSync('./_posts');

  const posts = arquivosMD.map((arquivo) => {
    const texto = fs.readFileSync(`./_posts/${arquivo}`, 'utf-8');
    const { content: conteudo, data: dados } = grayMatter(texto);
    const textoHTML = remark()
      .use(remarkHTML)
      .processSync(conteudo)
      .toString();

    return {
      dados: {
        titulo: dados.titulo,
        data: dados.data,
        resumo: dados.resumo,
        link: arquivo.replace('.md', '')
      },
      conteudo: textoHTML
    }
  })

  return posts;
}

export const getPostLink = (link) => {
  const posts = getAllPosts();

  return posts.find(post =>  post.dados.link == link)
}