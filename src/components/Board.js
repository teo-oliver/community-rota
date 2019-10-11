import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Table, Th, Td } from '../styles/boardStyles';
import Droppable from './Droppable';
import { fetchUser } from '../redux/actions/user';

const Board = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  props.users.map(user => {
    console.log(user.first_name);
  });

  return (
    <div className="Board">
      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>Sun</Th>
            <Th>Mon</Th>
            <Th>Tue </Th>
            <Th>Wed</Th>
            <Th>Tue</Th>
            <Th>Fri</Th>
            <Th>Sat</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Teo Oliver</Td>
            <Td>
              <Droppable id="1"></Droppable>
            </Td>
            <Td>
              <Droppable id="2"></Droppable>
            </Td>
            <Td>
              <Droppable id="3"></Droppable>
            </Td>
            <Td>
              <Droppable id="4"></Droppable>
            </Td>
            <Td>
              <Droppable id="5"></Droppable>
            </Td>
            <Td>
              <Droppable id="6"></Droppable>
            </Td>
            <Td>
              <Droppable id="7"></Droppable>
            </Td>
          </tr>
          <tr>
            <Td>Joyce Betoni</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
          </tr>
          <tr>
            <Td>Fernando Godoy</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
          </tr>
          <tr>
            <Td>Jose Daniel</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
            <Td>X</Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('From mapstatetoprops:', state.users);
  return {
    users: Object.values(state.users)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Board);
