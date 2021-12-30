import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "./close.svg";
import incomeImg from "./income.svg";
import outcomeImg from "./outcome.svg";
import { useTransactions } from '../../hooks/useTransactions';

export const NewTransactionModal = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useTransactions()

  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState('')
  const [type, setType] = useState("deposit");

  const handleCreateNewTransaction = async (event) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={ handleCreateNewTransaction }>
        <h2>Cadastrar informações</h2>

        <input 
          placeholder="Título"
          value={ title }
          onChange={ (event) => setTitle(event.target.value) }
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={ amount }
          onChange={ (event) => setAmount(Number(event.target.value)) } 
        />

        <TransactionTypeContainer>
          <button
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            className={type === "deposit" ? "activeDeposit": ''}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            className={type === "withdraw" ? "activeWithdraw" : ''}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={ category }
          onChange={ (event) => setCategory(event.target.value) }
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
