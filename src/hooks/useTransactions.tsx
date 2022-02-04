import React from "react";
import { api } from "../services/api";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export const TransactionsProvider = (props: TransactionsProviderProps) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = React.useContext(TransactionsContext)
  return context
}