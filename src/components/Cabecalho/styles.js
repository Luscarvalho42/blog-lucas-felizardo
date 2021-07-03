import Styled from 'styled-components'

const StyledCabecalho = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

StyledCabecalho.titulo = Styled.h1`
    color: ${({theme}) => theme.cores.destaque};
    font-family: ${({theme}) => theme.fundacao.fontFamily.titulo};
    font-weight: 600;
    margin-top: -8px;
`

StyledCabecalho.btnDarkMode = Styled.div`
    transition: 0.3s;
    cursor: pointer;
`

export default StyledCabecalho