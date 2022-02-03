import React from 'react'
import incomeImage from '../../assets/images/income.svg'
import outcomeImage from '../../assets/images/outcome.svg'
import totalImage from '../../assets/images/total.svg'

import * as S from './Sumary.styles'

interface ContentProps {
  title: string;
  icon: string;
  value: string;
  highlightBackground: boolean,
}

const contents: ContentProps[] = [
  {

    title: 'Entradas',
    icon: incomeImage,
    value: 'R$ 1000,00',
    highlightBackground: false,
  },
  {
    title: 'Saídas',
    icon: outcomeImage,
    value: '- R$ 500,00',
    highlightBackground: false,
  },
  {
    title: 'Total',
    icon: totalImage,
    value: 'R$ 500,00',
    highlightBackground: true,
  },
]

export const Sumary = () => {
  return (
    <S.Container>
      {contents.map((content) => (
        <S.Content key={content.title} highlightBackground={content.highlightBackground}>
          <header>
            <p>{content.title}</p>
            <img src={content.icon} alt={content.title} />
          </header>
          <strong>{content.value}</strong>
        </S.Content>
      ))}
    </S.Container>
  )
}
