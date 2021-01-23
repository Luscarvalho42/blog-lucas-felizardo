import Styled from 'styled-components'

export const Container = Styled.article`
  margin: 30px auto;
  width: max(50vw, 350px);

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
`