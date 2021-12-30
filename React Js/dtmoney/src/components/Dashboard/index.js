import React from "react";
import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard = () => {
  return (
    <Container >
      <Summary />
      <TransactionsTable />
    </Container>
  )
}