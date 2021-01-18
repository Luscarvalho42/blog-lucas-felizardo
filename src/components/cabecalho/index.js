import Cookie from 'js-cookie'

import Image from 'next/image'

import temaClaro from '../../styles/temaClaro'
import temaEscuro from '../../styles/temaEscuro'

import {Container, ContainerImagem, Titulo, BtnDarkMode} from './style'

const Cabecalho = (props) => {
  const mudarTema = () => {
    props.atualizarTema (value => {
      if(value.background == '#fff') {
        Cookie.set('tema', 'temaEscuro')
        return temaEscuro
      } else {
        Cookie.set('tema', 'temaClaro')
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