import styled from 'styled-components';

export const Form = styled.form`
  background-color: #33CC95;
  padding: 20px;
  /* display: flex; */
`;

export const Button = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  color: #fff;
  background: #5429CC;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Expense = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: #969cb3;
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: #ffffff;
    color: #969cb3;
    border-radius: 0.25rem;
  }
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 10%;
  height: 0.35rem;
  padding: 0.8rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 12px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
