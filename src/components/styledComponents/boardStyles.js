import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const Th = styled.th`
  height: 35px;
  width: 182px;
  min-width: 182px;
  border: #d8ddef solid 0.2px;

  background-color: #45b69c;
  color: white;
  margin: 0;
  &:hover {
    background-color: orange;
  }
`;

export const Td = styled.td`
  height: 62px;
  width: 182px;
  border: #d8ddef solid 2px;

  background-color: white;
  margin: 0;
`;
