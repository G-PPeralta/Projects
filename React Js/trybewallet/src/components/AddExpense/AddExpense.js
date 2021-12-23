import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wallet, fetchCoins, coins } from '../../actions/index';
import SelectCurrencyAndCategory
  from '../SelectCurrencyAndCategory/SelectCurrencyAndCategory';
import { Form, StyledInput, Button } from './styles';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Lazer',
  exchangeRates: {},
};

class AddExpense extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendCurrenciesToExchangeRates = this.sendCurrenciesToExchangeRates.bind(this);
  }

  componentDidMount() {
    this.sendCurrenciesToExchangeRates();
  }

  handleChange(event) {
    const { name, value } = event.target;
    return this.setState({ [name]: value });
  }

  async sendCurrenciesToExchangeRates() {
    const { fetch } = this.props;
    await fetch();
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  async handleClick(event) {
    event.preventDefault();
    this.setState(INITIAL_STATE);
    const { sendExpensesToGlobalState } = this.props;
    sendExpensesToGlobalState(this.state);
    await this.sendCurrenciesToExchangeRates();
  }

  render() {
    const { currency, method, tag, value, description } = this.state;
    return (
      <Form>
        <label htmlFor="value">
          Valor:
          {' '}
          <StyledInput
            type="number"
            data-testid="value-input"
            id="value"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          {' '}
          <StyledInput
            type="text"
            data-testid="description-input"
            id="description"
            name="description"
            placeholder="Descrição"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <SelectCurrencyAndCategory
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <br />
        <Button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </Button>
      </Form>
    );
  }
}

AddExpense.propTypes = {
  sendExpensesToGlobalState: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpensesToGlobalState: (payload) => dispatch(wallet(payload)),
  fetch: () => dispatch(fetchCoins(coins)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
