import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioButton } from './styles';
import {TransactionTypeContainer} from './styles'

import closeImg from "../../assets/close.svg";
import { FormEvent, useState, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransitionModalProps{
  isOpen:boolean;
  onRequestClose: () => void
}

export function NewTransationModalOpen({isOpen, onRequestClose}: NewTransitionModalProps){
  const { createTransaction }= useTransactions()

  const [type, setType] = useState('deposit');

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction(
      {
        amount,
        category,
        title,
        type,
      }
    )
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('')
    onRequestClose();
  }
  


  return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"> 
        <img src={closeImg} alt="" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)} />
        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioButton 
          type="button"
          onClick={()=>{setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioButton>
          <RadioButton 
          type="button"
          onClick={()=>{setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioButton>

        </TransactionTypeContainer>
        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}