import styled from 'styled-components';

export const Table = styled.div`
margin-top: 4rem;

table {
  width: 100%;
  border-spacing: 0 0.5rem;
}

th {
  color: #3c354e;;
  font-weight: 800;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
}

td {
  padding: 1rem 2rem;
  border: 0;
  background: #FFFFFF;
  color: #3c354e;
  border-radius: 0.25rem;
}
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
