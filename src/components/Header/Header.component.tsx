import logoImage from '../../assets/images/logo.svg'
import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImage} alt="dt money" />
        <button type="button">Nova transação</button>
      </S.Content>
    </S.Container>
  )
}