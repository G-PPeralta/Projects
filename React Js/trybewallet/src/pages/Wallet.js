import React from 'react';
import Header from '../components/Header/Header';
import AddExpense from '../components/AddExpense/AddExpense';
import TransactionsTable from '../components/TransactionsTable/TransactionsTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <TransactionsTable />
      </>
    );
  }
}

export default Wallet;
