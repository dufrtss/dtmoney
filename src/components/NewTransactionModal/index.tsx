import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { TransactionsContext } from "../../TransactionsContext";
import { api } from "../../services/api";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import close from "../../assets/close.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      type,
      category
    })
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
        <img src={close} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={income} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdrawal")}
            isActive={type === "withdrawal"}
            activeColor="red"
          >
            <img src={outcome} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
