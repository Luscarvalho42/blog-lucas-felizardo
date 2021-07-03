import Image from 'next/image'
import TemaClaro from '../../styles/TemaClaro'
import TemaEscuro from '../../styles/TemaEscuro'
import StyledCabecalho from './styles'

const Cabecalho = ({atualizarTema, setCookie, cookies}) => {
  const mudarTema = () => {
    atualizarTema (() => {
      if(cookies.tema == 'TemaClaro') {
        setCookie('tema', 'TemaEscuro')
        return TemaEscuro
      } else {
        setCookie('tema', 'TemaClaro')
        return TemaClaro
      }
    })
  }

  return(
    <StyledCabecalho>
      <Image src="/perfil.png" width={200} height={200} />
      <StyledCabecalho.titulo>Lucas Felizardo</StyledCabecalho.titulo>
      <StyledCabecalho.btnDarkMode>
        <Image src="/moon.svg" width={32} height={32} onClick={mudarTema} />
      </StyledCabecalho.btnDarkMode>
    </StyledCabecalho>
  )
}

export default Cabecalho