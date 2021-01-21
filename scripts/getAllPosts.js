import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

const getAllPosts = () => {
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
        titulo: dados.title,
        resumo: dados.excerpt,
        link: arquivo.replace('.md'),
      },
      conteudo: textoHTML
    }
  })

  return posts;
}

export default getAllPosts