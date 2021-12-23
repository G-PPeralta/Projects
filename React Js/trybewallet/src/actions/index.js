/* eslint-disable no-unused-vars */
export const GET_USER = 'GET_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_COINS = 'GET_COINS';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const user = (payload) => ({
  type: GET_USER,
  payload,
});

export const wallet = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const remove = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const coins = (payload) => ({
  type: GET_COINS,
  payload,
});

export const fetchCoins = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return dispatch(coins(data));
};
