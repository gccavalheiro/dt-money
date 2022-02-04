import * as C from '../../components'
import * as S from './Dashboard.styles'

export const Dashboard = () => {
  return (
    <S.Container>
      <C.Summary />
      <C.TransactionsTable />
    </S.Container>
  )
}