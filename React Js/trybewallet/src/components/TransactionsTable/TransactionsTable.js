import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../../actions/index';
import { Table, Button } from './styles';

class TransactionsTable extends React.Component {
  render() {
    const { expenses, removeExpenseFromGlobalState } = this.props;
    const transactions = expenses && expenses.map((trade) => {
      const { description, tag, id, method, value, currency, exchangeRates } = trade;
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ exchangeRates[currency].name.split('/Real Brasileiro') }</td>
          <td>{ currency ? Number(exchangeRates[currency].ask).toFixed(2) : 0 }</td>
          <td>{ currency ? (value * exchangeRates[currency].ask).toFixed(2) : 0 }</td>
          <td>Real</td>
          <td>
            <Button
              onClick={ () => removeExpenseFromGlobalState(id) }
              type="button"
              data-testid="delete-btn"
            >
              Remover
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <Table>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>{transactions}</tbody>
        </table>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseFromGlobalState: (id) => dispatch(remove(id)),
});

TransactionsTable.propTypes = ({
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseFromGlobalState: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);
