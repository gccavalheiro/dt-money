import { useTransactions } from '../../hooks/useTransactions'

import incomeImage from '../../assets/images/income.svg'
import outcomeImage from '../../assets/images/outcome.svg'
import totalImage from '../../assets/images/total.svg'

import * as S from './Summary.styles'

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.deposits += transaction.amount
      accumulator.total += transaction.amount
    } else {
      accumulator.withdraws += transaction.amount
      accumulator.total -= transaction.amount
    }

    return accumulator
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <S.Container>
      <S.Content>
        <header>
          <p>Entrada</p>
          <img src={incomeImage} alt='Entrada' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </S.Content>

      <S.Content>
        <header>
          <p>Saída</p>
          <img src={outcomeImage} alt='Saída' />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </S.Content>

      <S.Content highlightBackground dangerous={summary.total < 0}>
        <header>
          <p>Total</p>
          <img src={totalImage} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </S.Content>
    </S.Container>
  )
}
