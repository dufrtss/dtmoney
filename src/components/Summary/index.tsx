import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext';

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";



import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={income} alt="income" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
