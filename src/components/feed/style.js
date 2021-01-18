import Styled from 'styled-components'

export const Container = Styled.section`
  margin: 30px auto;
  width: max(50vw, 350px);
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  gap: 50px;
`

export const PostStyle = Styled.div`
  width: max(45%, 350px);
`