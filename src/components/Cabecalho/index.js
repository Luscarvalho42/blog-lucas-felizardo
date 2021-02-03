import Styled from 'styled-components'
import Image from 'next/image'
import temaClaro from '../../styles/temaClaro'
import temaEscuro from '../../styles/temaEscuro'

const Container = Styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`

const ContainerImagem = Styled.div`
  border: none;
  border-radius: 100%;
  height: ${(props) => props.tamanho};
  width: ${(props) => props.tamanho};
  overflow: hidden;
  backdrop-filter: invert(5%); 
`

const Titulo = Styled.h1`
  text-align: center;
  display: inline-block;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.destaque};
  padding: 5px;
`

const BtnDarkMode = Styled.button`
  background-color: transparent;
  border: 1px solid gray;
  color: gray;
  font-weight: bold;
  border-radius: 0px;
  padding: 5px;
  transition: 0.3s;
  margin-top: -10px;

  &:hover {
    backdrop-filter: invert(20%);
  }
`

const Cabecalho = ({atualizarTema, setCookie}) => {
  const mudarTema = () => {
    atualizarTema (value => {
      if(value.background == '#fff') {
        setCookie('tema', 'temaEscuro', { path: '/' })
        return temaEscuro
      } else {
        setCookie('tema', 'temaClaro', { path: '/' })
        return temaClaro
      }
    })
  }

  return(
    <Container>
      <ContainerImagem tamanho="100px">
        <Image src="/perfil.png" layout="fill" />
      </ContainerImagem>
      <Titulo>Blog Lucas Felizardo</Titulo>
      <BtnDarkMode onClick={mudarTema}>Alterar Tema</BtnDarkMode>
    </Container>
  )
}

export default Cabecalho