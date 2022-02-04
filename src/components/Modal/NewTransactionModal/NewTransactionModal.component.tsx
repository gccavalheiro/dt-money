import React from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../../hooks/useTransactions'

import closeImage from '../../../assets/images/close.svg'
import incomeImage from '../../../assets/images/income.svg'
import outcomeImage from '../../../assets/images/outcome.svg'

import * as S from './NewTransactionModal.styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// interface FormStateProps {
//   values: {
//     title: string;
//     amount: string;
//     category: string;
//     type: string;
//   },
//   disabled: boolean;
// }

export const NewTransactionModal = (props: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [category, setCategory] = React.useState('')
  const [type, setType] = React.useState('deposit')
  const [disabled, setDisabled] = React.useState(false)

  // const [formState, setFormState] = React.useState<FormStateProps>(
  //   {
  //     values: {
  //       title: '',
  //       amount: '',
  //       category: '',
  //       type,
  //     },
  //     disabled: false,
  //   }
  // )

  // const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     values: {
  //       ...formState.values,
  //       [event.target.name as keyof typeof formState.values]: event.target.value,
  //       type,
  //     }
  //   }))
  // }, [formState, type])

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true)

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    setDisabled(false)
    props.onRequestClose();
  }, [amount, category, createTransaction, props, title, type])


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
          name="title"
          id="title"
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)} />

        <input
          type="number"
          name="amount"
          id="amount"
          placeholder='Valor'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor={'green'}
            name="deposit"
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
            name="withdraw"
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
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit" disabled={disabled}>Cadastrar</button>
      </S.Container>
    </Modal>
  )
}