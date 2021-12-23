// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, GET_COINS, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = ({
  currencies: {},
  expenses: [],
});

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case GET_COINS:
    return ({
      ...state,
      currencies: { ...action.payload },
    });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    });
  default:
    return state;
  }
};

export default walletReducer;
