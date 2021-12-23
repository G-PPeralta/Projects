import styled from 'styled-components';

export const Category = styled.h1`
  margin: 1rem;
  color: #0d0d0d;
`;

export const Alternatives = styled.ol`
  list-style: none;
  color: #0d0d0d;
`;

export const ButtonContainer = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnswerButton = styled.button`
  margin: 1rem;
  background: #ff8e3c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 3rem;
  border: none;
  color: #0d0d0d;
  /* border-radius: 1rem; */
  cursor: pointer;
`;

export const NextButton = styled.button`
  margin: 1rem;
  background: #ff8e3c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 140px;
  height: 2.5rem;
  border: none;
  color: #0d0d0d;
  border-radius: 2rem;
  cursor: pointer;
`;

export const Timer = styled.h4`
  margin: 1rem 0 1rem 0;
  color: #0d0d0d;
`;
