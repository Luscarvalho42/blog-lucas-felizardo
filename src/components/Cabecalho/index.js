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

const Titulo = Styled.h1`
  color: ${(props) => props.theme.destaque};
`

const DivCentralizada = Styled.div`
  padding-right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: solid 5px #DF3E46;
  background-color: white;
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
      <Image src="/perfil.png" width={200} height={200} />
      <DivCentralizada>
        <Image src="/logo.svg" width={50} height={50}/>
        <Titulo>Lucas Felizardo</Titulo>
      </DivCentralizada>
      <BtnDarkMode onClick={mudarTema}>Alterar Tema</BtnDarkMode>
    </Container>
  )
}

export default Cabecalho