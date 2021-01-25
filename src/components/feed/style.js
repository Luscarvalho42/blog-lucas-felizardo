import Styled from 'styled-components'

export const Container = Styled.section`
  margin: 30px auto;
  width: max(50vw, 350px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`

export const PostStyle = Styled.div`
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