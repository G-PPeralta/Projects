import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins, coins } from '../../actions/index';
import { StyledInput, Label } from './styles';

class SelectCurrencyAndCategory extends React.Component {
  render() {
    const inputOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currency, method, tag, handleChange, currencies } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          {' '}
          <StyledInput
            data-testid="currency-input"
            name="currency"
            id="currency"
            onChange={ handleChange }
            value={ currency }
          >
            {Object.keys(currencies).filter((cur) => cur !== 'USDT')
              .map((cur) => (<option data-testid={ cur } key={ cur }>{cur}</option>))}
          </StyledInput>
        </label>
        <Label htmlFor="method">
          Método de Pagamento:
          {' '}
          <StyledInput
            data-testid="method-input"
            name="method"
            id="method"
            onChange={ handleChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </StyledInput>
        </Label>
        <Label htmlFor="tag">
          Categoria:
          {' '}
          <StyledInput
            data-testid="tag-input"
            name="tag"
            id="tag"
            onChange={ handleChange }
            value={ tag }
          >
            { inputOptions.map((input) => <option key={ input }>{ input }</option>)}
          </StyledInput>
        </Label>
      </div>
    );
  }
}

SelectCurrencyAndCategory.propTypes = {
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  // fetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCoins(coins)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrencyAndCategory);
