import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const Th = styled.th`
  height: 1.5rem;
  width: 150px;
  min-width: 150px;
  border: #d8ddef solid 0.2px;

  background-color: #45b69c;
  color: white;
  margin: 0;
  &:hover {
    background-color: orange;
  }
`;

export const Td = styled.td`
  height: 52px;
  /* width: 150px; */
  border: #d8ddef solid 2px;
  background-color: white;
  margin: 0;

  ${props => props.name && 'padding-left: 2rem;'}

  .totals {
    padding-top: 0.2rem;
    font-size: 0.7rem;
  }
`;
