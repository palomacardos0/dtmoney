import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransationModalOpen } from "./components/NewTransactionModalOpen";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransationModalOpen 
      isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionsProvider>
  );
}