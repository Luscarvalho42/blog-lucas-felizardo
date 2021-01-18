import Styled from 'styled-components'

export const Container = Styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`

export const ContainerImagem = Styled.div`
  border: none;
  border-radius: 100%;
  height: ${(props) => props.tamanho};
  width: ${(props) => props.tamanho};
  overflow: hidden;
  backdrop-filter: invert(5%); 
`

export const Titulo = Styled.h1`
  text-align: center;
  display: inline-block;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.destaque};
  padding: 5px;
`

export const BtnDarkMode = Styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.texto};
  color: ${(props) => props.theme.texto};
  border-radius: 0px;
  padding: 5px;
  transition: 0.3s;

  &:hover {
    backdrop-filter: invert(20%);
  }
`
