import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Content from './styles';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const updatedExpenses = expenses.reduce((acc, curr) => {
      const { value, exchangeRates, currency } = curr;
      const { ask } = exchangeRates[currency];
      return Number(acc) + Number(value * ask);
    }, 0);
    return (
      <Content>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          Total:
          {' '}
          {updatedExpenses}
          {' '}
          BRL
        </h2>
        {/* <span data-testid="header-currency-field">BRL</span> */}
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
