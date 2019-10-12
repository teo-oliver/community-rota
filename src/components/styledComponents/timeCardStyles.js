import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;

  border-radius: 3px;
  padding: 9px 10px;

  background-color: ${props => props.theme.light};
  height: 60px;
  width: 180px;
  max-width: 600px;
  cursor: pointer;
  :hover {
    background-color: gray;
  }

  .main {
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-left: solid 3px red;
    padding-left: 1rem;
    align-items: center;
    justify-items: start;
  }
  .delete {
    position: absolute;
    top: 3px;
    right: 3px;
    height: 20px;
    width: 20px;
    :hover {
      background-color: red;
      color: white;
    }
  }
`;
