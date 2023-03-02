import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext';

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";



import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.incomes += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.outcomes += transaction.amount;
      acc.total -= transaction.amount;
    }
    
    return acc;
  }, {
    incomes: 0,
    outcomes: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={income} alt="income" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>
          - 
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcomes)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
