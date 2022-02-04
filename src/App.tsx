import React from 'react';
import Modal from 'react-modal';

import { Dashboard, Header } from "./components";
import { NewTransactionModal } from './components/Modal/NewTransactionModal/NewTransactionModal.component';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = React.useState(false)

  const handleOpenModal = () => {
    setNewTransactionModalOpen(!newTransactionModalOpen);

  }
  const handleCloseModal = () => {
    setNewTransactionModalOpen(!newTransactionModalOpen);
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onNewTransactionModalOpen={handleOpenModal} />
      <NewTransactionModal isOpen={newTransactionModalOpen} onRequestClose={handleCloseModal} />
      <Dashboard />
    </TransactionsProvider>
  );
}
