import React from 'react'
import { api } from '../../services/api'
import * as S from './TransactionsTable.styles'

interface TransactionProps {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = React.useState<TransactionProps[]>([]);

  React.useEffect(() => {
    try {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  )
}