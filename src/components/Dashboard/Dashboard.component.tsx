import * as C from '../../components'
import * as S from './Dashboard.styles'

export const Dashboard = () => {
  return (
    <S.Container>
      <C.Sumary />
      <C.TransactionsTable />
    </S.Container>
  )
}