import React from 'react'
import logoImage from '../../assets/images/logo.svg'
import Modal from 'react-modal'
import * as S from './Header.styles'

interface HeaderProps {
  onNewTransactionModalOpen: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImage} alt="dt money" />
        <button type="button" onClick={props.onNewTransactionModalOpen}>Nova transação</button>
      </S.Content>


    </S.Container>
  )
}