import React from 'react'
import { api } from '../../services/api'
import * as S from './TransactionsTable.styles'

export const TransactionsTable = () => {
  React.useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  })

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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>03/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1.100,00</td>
            <td>Casa</td>
            <td>03/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>03/02/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}