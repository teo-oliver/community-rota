import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 0.7rem;
  border-radius: 3px;
  padding: 9px 10px;

  background-color: ${props => props.theme.light};
  height: 49px;
  width: 149px;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
  .shift-time {
    font-weight: bold;
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
    text-align: center;
    /* text-justify: center; */
    top: 3px;
    right: 3px;
    height: 16px;
    width: 16px;
    :hover {
      background-color: red;
      color: white;
    }
  }
`;
