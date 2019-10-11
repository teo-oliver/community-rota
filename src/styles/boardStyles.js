import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
`;

export const Th = styled.th`
  height: 62px;
  width: 182px;
  min-width: 182px;
  border: #282c34 solid 2px;
  border-radius: 8px;
  background-color: blue;
  margin: 0;
  &:hover {
    background-color: orange;
  }
`;

export const Td = styled.td`
  height: 62px;
  width: 182px;
  border: #282c34 solid 2px;
  /* border-radius: 8px; */
  background-color: white;
  margin: 0;
`;
