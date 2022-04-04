import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Freelance</td>
            <td className="deposit">R$1.200</td>
            <td>Web development</td>
            <td>12/02/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdrawal">- R$600</td>
            <td>Household</td>
            <td>07/04/2022</td>
          </tr>
          <tr>
            <td>Snack</td>
            <td className="withdrawal">- R$75</td>
            <td>Consumables</td>
            <td>22/03/2022</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td className="deposit">R$3.000</td>
            <td>Payment</td>
            <td>07/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
