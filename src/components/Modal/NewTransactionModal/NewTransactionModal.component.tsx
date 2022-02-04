import React, { useCallback } from 'react'
import Modal from 'react-modal'

import closeImage from '../../../assets/images/close.svg'
import incomeImage from '../../../assets/images/income.svg'
import outcomeImage from '../../../assets/images/outcome.svg'
import { api } from '../../../services/api'

import * as S from './NewTransactionModal.styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface FormStateProps {
  values: {
    name: string;
    amount: string;
    category: string;
    type: string;
  },
  disabled: boolean;
}

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const [type, setType] = React.useState('deposit')
  const [formState, setFormState] = React.useState<FormStateProps>(
    {
      values: {
        name: '',
        amount: '',
        category: '',
        type: 'deposit',
      },
      disabled: false,
    }
  )

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...formState.values,
        [event.target.name as keyof typeof formState.values]: event.target.value,
        type
      }
    }))
  }, [formState, type])

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {

    try {
      event.preventDefault();

      setFormState((formState) => ({
        values: {
          ...formState.values,
          type
        },
        disabled: true,
      }))
      console.log(formState.values);

      api.post('/transactions', formState.values)

      setFormState((formState) => ({
        values: {
          name: '',
          amount: '',
          category: '',
          type,
        },
        disabled: false,
      }))
    } catch (error) {
      console.log(error);
    }
  }, [formState.values, type])


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={props.onRequestClose}
        className='react-modal-close'
      >
        <img
          src={closeImage}
          alt="Fechar modal"
        />
      </button>
      <S.Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          name="name"
          id="name"
          placeholder='Nome'
          value={formState.values.name}
          onChange={handleInputChange} />

        <input
          type="number"
          name="amount"
          id="amount"
          placeholder='Valor'
          value={formState.values.amount}
          onChange={handleInputChange}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor={'green'}
          >
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type='button'
            className='withdraw'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor={'red'}
          >
            <img src={outcomeImage} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          name="category"
          id="category"
          placeholder='Categoria'
          value={formState.values.category}
          onChange={handleInputChange}
        />

        <button type="submit" disabled={formState.disabled}>Cadastrar</button>
      </S.Container>
    </Modal>
  )
}